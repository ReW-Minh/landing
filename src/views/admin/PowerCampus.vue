<template>
    <div class="m-2 px-3 px-sm-0 editor" style="min-height: 90%">
        <template v-if="!store.loading">
            <Editor v-model="content" ref="editorRef" editorStyle="height: calc(100vh - 110px)" />
            <div class="d-flex justify-content-end gap-2 mt-2">
                <Button label="Cancel" severity="secondary" @click="confirmCancel" />
                <Button label="Save" @click="confirmSave" :loading />
            </div>
        </template>
        <Transition>
            <div v-show="store.loading"
                class="position-absolute align-items-center justify-content-center top-50 start-50 translate-middle"
                style="display: flex">
                <div class="loading-indicator"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useLoadingStore } from '../../store/loading'
import { confirmAction } from '../../utils'
import { usePowerCampus } from '../../services/usePowerCampus'

const { powerCampusContent, getPowerCampusContent, savePowerCampusContent } = usePowerCampus()

const store = useLoadingStore()

const confirm = useConfirm()

const content = ref('')

const loading = ref(false)
const handleSave = async () => {
    loading.value = true
    const res = await savePowerCampusContent(content.value)
    loading.value = false

    if (!res?.success)
        return

    powerCampusContent.value = content.value
}

const confirmCancel = () => {
    const obj = {
        message: 'Do you want to cancel?',
        accept: () => { content.value = powerCampusContent.value }
    }
    confirmAction(confirm, obj)
}
const confirmSave = () => {
    const obj = {
        message: 'Do you want to save changes?',
        accept: handleSave
    }
    confirmAction(confirm, obj)
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

onMounted(async () => {
    await getPowerCampusContent()
    content.value = powerCampusContent.value
})
</script>