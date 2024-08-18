<template>
    <Button v-if="type === 'add'" label="Add Bio" icon="pi pi-plus" @click="visible = true" />
    <Button v-if="type === 'edit'" class="mx-4" icon="pi pi-pencil" text @click="bindData" />

    <Dialog v-model:visible="visible" modal header="Add Bio" :style="{ width: '80vw' }" :closable="false">
        <div class="row">
            <div class="col-md-6 d-flex flex-column">
                <label class="fw-bold">Name:</label>
                <InputText v-model="dataModel.name" autocomplete="off" />
            </div>

            <div class="col-md-6 d-flex flex-column">
                <label class="fw-bold">Picture:</label>

                <div class="d-flex align-items-center justify-content-between p-inputtext p-component"
                    style="height: 42px !important" v-if="showPicture">
                    <a target="_blank" :href="href" style="color: var(--rew-primary-green)">{{ fileName }}</a>
                    <Button icon="pi pi-trash" text @click="confirmRemove" size="small" />
                </div>

                <Button v-else label="Choose image" icon="pi pi-image" @click="fileInput.click()" />

                <input type="file" ref="fileInput" class="d-none" accept="image/*" @change="chooseFile">
            </div>
        </div>

        <div class="d-flex flex-column editor mt-2">
            <label class="fw-bold">Content:</label>
            <Editor v-model="dataModel.content" ref="editorRef" editorStyle="height: 320px" />
        </div>

        <div class="d-flex flex-column editor mt-2">
            <Links v-model="presentations" type="presentation" />
        </div>

        <div class="d-flex flex-column editor mt-2">
            <Links v-model="publications" type="publication" />
        </div>

        <template #footer>
            <div class="d-flex justify-content-end mt-2">
                <Button class="me-2" type="button" label="Cancel" severity="secondary" @click="confirmCancel" />
                <Button type="button" label="Save" @click="confirmSave" :loading />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import Editor from 'primevue/editor'
import Links from './Links.vue'

import { ref, reactive, watch, computed } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useBio } from '../../../services/useBio'
import { useUpload } from '../../../services/useUpload'
import { confirmAction } from '../../../utils'

const { getBio, addBio, updateBio } = useBio()
const { upload } = useUpload()

const baseUrl = import.meta.env.VITE_URL_API

const props = defineProps(['type', 'data'])

const confirm = useConfirm()

const visible = ref(false)

const dataModel = reactive({
    name: '',
    content: '',
    picture: '',
    presentations: '',
    publications: ''
})

const presentations = ref([])

const publications = ref([])

const confirmCancel = () => {
    const obj = {
        message: 'Do you want to cancel?',
        accept: () => { visible.value = false }
    }
    confirmAction(confirm, obj)
}
const confirmSave = () => {
    const obj = {
        message: 'Do you want to save changes?',
        accept: handleActionBio
    }
    confirmAction(confirm, obj)
}

const fileInput = ref()
const href = ref()
const file = ref()

const chooseFile = ({ target }) => {
    file.value = target.files[0]
    href.value = URL.createObjectURL(file.value)
}
const showPicture = computed(() => {
    if (props.type === 'edit' && dataModel.picture)
        return true

    if (file.value)
        return true

    return false
})
const fileName = computed(() => {
    if (props.type === 'edit' && dataModel.picture)
        return dataModel.picture.split('/').at(-1)

    if (file.value)
        return file.value.name

    return ''
})
const confirmRemove = () => {
    const obj = {
        message: 'Do you want to remove this image?',
        accept: () => {
            file.value = null
            fileInput.value.value = null
            fileInput.files = null
            href.value = null
            dataModel.picture = null
        }
    }
    confirmAction(confirm, obj)
}

const loading = ref(false)
const handleUpload = async () => {
    const formData = new FormData()

    formData.append('file', file.value)

    const res = await upload(formData)

    if (!res?.success)
        return

    dataModel.picture = res.data

    return res
}
const handleActionBio = async () => {
    loading.value = true

    if (file.value) {
        const res = await handleUpload()

        if (!res?.success) {
            loading.value = false
            return
        }
    }


    const action = props.type === 'add' ? addBio : updateBio

    dataModel.presentations = JSON.stringify(presentations.value)
    dataModel.publications = JSON.stringify(publications.value)

    const res = await action(dataModel)
    loading.value = false

    if (!res?.success)
        return

    visible.value = false
    getBio()
}

const bindData = () => {
    const { name, picture, content, id } = props.data

    dataModel.id = id
    dataModel.name = name
    dataModel.picture = picture
    dataModel.content = content
    dataModel.presentations = props.data.presentations || '[]'
    dataModel.publications = props.data.publications || '[]'

    presentations.value = JSON.parse(dataModel.presentations)
    publications.value = JSON.parse(dataModel.publications)

    if (dataModel.picture) {
        href.value = `${baseUrl}${dataModel.picture}`
    }

    visible.value = true
}

const editorRef = ref()

watch(editorRef, editor => {
    if (!editor) return
    editor.renderValue = function renderValue(value) {
        if (this.quill) {
            if (value) {
                const delta = this.quill.clipboard.convert({ html: value })
                this.quill.setContents(delta, 'silent')
            } else {
                this.quill.setText('')
            }
        }
    }.bind(editor)
})

watch(visible, () => {
    if (visible.value) return
    for (const key in dataModel) {
        dataModel[key] = ''
    }
    file.value = null
    href.value = null

    presentations.value = []
    publications.value = []
})
</script>