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
      <div class="editor prose !max-w-[unset]">
        <Editor v-model="data.content.value" :class="{invalid: data.content.error}"
                editorStyle="height: calc(100vh - 390px)"/>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="saveChanges" :loading></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { IBlogDetail, IBlogForm } from '~/types/types';

const props = defineProps(['action', 'blogData'])

const emit = defineEmits(['reload'])

const toast = useToast()

const visible = defineModel({ default: false })

const data = reactive<IBlogForm>({
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

const bindData = (blogData: IBlogDetail) => {
  if (!blogData)
    return

  for (const key in data) {
    data[key as keyof IBlogForm].value = props.blogData[key]
  }
}

const validateData = () => {
  let flag = true

  for (const key in data) {
    if (key !== 'id') {
      data[key as keyof IBlogForm].error = !data[key as keyof IBlogForm].value

      if (data[key as keyof IBlogForm].error)
        flag = false
    }
  }

  return flag
}

const loading = useState<boolean>('loading')
const saveChanges = async () => {
  if (!validateData()) {
    toast.add(getErrorToast('You have not filled in the required fields'))
    return
  }

  const payload: IBlogDetail = {
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
    payload[key as keyof IBlogForm] = data[key as keyof IBlogForm].value
  }

  const func = props.action === ACTION.ADD ? addBlog : updateBlog

  loading.value = true
  const res = await func(payload)
  loading.value = false

  if (!res?.success) {
    toast.add(getErrorToast(res?.message || 'Unknown error. Please try again'))
    return
  }

  toast.add(getSuccessToast(`ReView ${props.action === ACTION.ADD ? 'added' : 'edited'} successfully.`))
  visible.value = false
  emit('reload')
}

const resetForm = () => {
  for (const key in data) {
    data[key as keyof IBlogForm].error = false
    data[key as keyof IBlogForm].value = ''
  }
}
</script>

<style scoped lang="scss">
:deep {
  .p-editor {
    &.invalid {
      .p-editor-toolbar {
        &.ql-snow {
          border-top-color: var(--p-inputtext-invalid-border-color);
          border-right-color: var(--p-inputtext-invalid-border-color);
          border-left-color: var(--p-inputtext-invalid-border-color);
        }
      }

      .p-editor-content {
        &.ql-snow {
          border-bottom-color: var(--p-inputtext-invalid-border-color);
          border-right-color: var(--p-inputtext-invalid-border-color);
          border-left-color: var(--p-inputtext-invalid-border-color);
        }
      }
    }

    .p-editor-toolbar {
      .ql-image, .ql-clean {
        display: none !important;
      }
    }
  }
}
</style>