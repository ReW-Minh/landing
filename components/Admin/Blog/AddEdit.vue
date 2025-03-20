<template>
  <Dialog v-model:visible="visible" modal :header="`${action} ReView`" class="p-dialog-maximized" loading>
    <label class="flex flex-col mb-4">
        <span class="font-semibold">
          Title
        </span>
      <InputText v-model="data.title.value" :invalid="data.title.error" class="flex-auto" autocomplete="off"/>
    </label>

    <div class="grid grid-cols-2 mb-4 gap-4">
      <label class="flex flex-col">
        <span class="font-semibold">
          Author name
        </span>
        <InputText v-model="data.author.value" :invalid="data.author.error" class="flex-auto" autocomplete="off"/>
      </label>

      <label class="flex flex-col">
        <span class="font-semibold">
          Permalink
        </span>
        <InputText v-model="data.route.value" :invalid="data.route.error" class="flex-auto" autocomplete="off"/>
      </label>
    </div>

    <div class="mb-4">
      <span class="font-semibold">
        Content
      </span>
      <div class="editor !max-w-[unset]">
        <ckeditor v-if="editor" v-model="data.content.value" :editor :config/>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="saveChanges" :loading></Button>
    </div>
  </Dialog>
</template>

<script setup>
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue'

const props = defineProps(['action', 'blogData'])

const emit = defineEmits(['reload'])

const toast = useToast()

const visible = defineModel({ default: false })

const cloud = useCKEditorCloud({
  version: '44.3.0',
  premium: false
})

const editor = computed(() => {
  if (!cloud.data.value)
    return null

  return cloud.data.value.CKEditor.ClassicEditor
})

const config = computed(() => {
  if (!cloud.data.value)
    return null

  const {
    Essentials,
    Paragraph,
    Bold,
    Italic,
    List,
    Strikethrough,
    Superscript,
    Font,
    Subscript,
    Code,
    Link,
    BlockQuote,
    CodeBlock,
    Alignment,
    Heading,
    Indent,
    Image,
    ImageResizeEditing,
    ImageResizeHandles,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    LinkImage,
    ImageInsert,
    ImageInsertViaUrl,
    Base64UploadAdapter
  } = cloud.data.value.CKEditor;

  const plugins = [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    List,
    Strikethrough,
    Superscript,
    Font,
    Subscript,
    Code,
    Link,
    BlockQuote,
    CodeBlock,
    Alignment,
    Heading,
    Indent,
    Image,
    ImageResizeEditing,
    ImageResizeHandles,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    LinkImage,
    ImageInsert,
    ImageInsertViaUrl,
    Base64UploadAdapter
  ]

  return {
    licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzM5NjQ3OTksImp0aSI6IjA0NWYzN2IxLTgyMTgtNDg2OC05NTA0LTE4NjM3ZjQ4NzUwYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCJdLCJ2YyI6IjhiODczZjdiIn0.P78OAebw-5OqB7yYxR0RLOvflCVw468YjCKud1jwVCm-GNRnDuYyxPcigpalw43rl_EaZTTyi9mkGUipcjVhzQ',
    plugins,
    toolbar: {
      items: [
        'undo', 'redo',
        '|',
        'heading',
        '|',
        'fontsize', 'fontColor', 'fontBackgroundColor',
        '|',
        'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
        '|',
        'link', 'insertImage', 'blockQuote', 'codeBlock',
        '|',
        'alignment',
        '|',
        'bulletedList', 'numberedList', 'indent'
      ],
      shouldNotGroupWhenFull: true
    },
    image: {
      toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'linkImage'
      ]
    },
  }
})

const data = reactive({
  title: {
    value: '',
    error: false
  },
  route: {
    value: '',
    error: false
  },
  author: {
    value: '',
    error: false
  },
  content: {
    value: '',
    error: false
  },
  id: {
    value: '',
    error: false
  }
})

watch(visible, () => {
  if (!visible)
    return

  if (props.action === ACTION.EDIT)
    bindData(props.blogData)

  if (props.action === ACTION.ADD)
    resetForm()
})

const bindData = (blogData) => {
  if (!blogData)
    return

  for (const key in data) {
    data[key].value = props.blogData[key]
  }
}

const validateData = () => {
  let flag = true

  for (const key in data) {
    if (key !== 'id') {
      data[key].error = !data[key].value

      if (data[key].error)
        flag = false
    }
  }

  return flag
}

const loading = useState('loading')
const saveChanges = async () => {
  if (!validateData()) {
    toast.add(getErrorToast('You have not filled in the required fields'))
    return
  }

  const payload = {
    content: '',
    author: '',
    title: '',
    id: '',
    index: 0,
    route: '',
    publish_time: 0,
    created_time: 0
  }

  for (const key in data) {
    payload[key] = data[key].value
  }

  const func = props.action === ACTION.ADD ? addBlog : updateBlog

  loading.value = true
  const res = await func(payload)
  loading.value = false

  if (!res?.success) {
    toast.add(getErrorToast(res?.message || 'Unknown error. Please try again'))
    return
  }

  toast.add(getSuccessToast(`ReView ${ props.action === ACTION.ADD ? 'added' : 'edited' } successfully.`))
  visible.value = false
  emit('reload')
}

const resetForm = () => {
  for (const key in data) {
    data[key].error = false
    data[key].value = ''
  }
}
</script>

<style lang="scss">
.ck.ck-balloon-panel.ck-balloon-panel_visible {
  z-index: 9999999999 !important;
}
</style>