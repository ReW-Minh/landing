<template>
  <div class="space-y-3">
    <div class="flex justify-end">
      <Button label="Add Blog" @click="openAddBlog"/>
    </div>

    <h1 class="rew-font rew-text-brown text-3xl text-center">
      The <span class="rew-text-green">Re</span>Views
    </h1>

    <DataTable :value="blogs?.blogs" scrollable scrollHeight="calc(100vh - 120px)" removableSort rowHover
               stripedRows :loading="loadingTable" lazy paginator :rows="BLOG_PAGE_LIMIT" :totalRecords="blogs?.total"
               @page="onPage($event)">
      <template v-for="col of columns" :key="col.field">
        <Column :field="col.field" :header="col.header" :sortable="col.sortable">
          <template #body="slotProps">
            <div class="line-clamp-2">
              <span v-if="col.isTime">
                {{ formatDate(slotProps.data[col.field]) }}
              </span>

              <div v-else-if="col.isAction" class="flex items-center gap-x-2 action">
                <button v-tooltip.bottom="'View'">
                  <i class="pi pi-eye"></i>
                </button>

                <button v-tooltip.bottom="'Edit'" @click="openEditBlog(slotProps.data)">
                  <i class="pi pi-pencil"></i>
                </button>

                <button v-if="!slotProps.data.is_published" v-tooltip.bottom="'Publish'"
                        @click="confirmPublish(slotProps.data.id)">
                  <i class="pi pi-angle-double-up"></i>
                </button>

                <button v-tooltip.bottom="'Delete'" @click="confirmDelete(slotProps.data.id)">
                  <i class="pi pi-trash"></i>
                </button>
              </div>

              <span v-else>
                {{ slotProps.data[col.field] }}
              </span>
            </div>
          </template>
        </Column>
      </template>
    </DataTable>
  </div>

  <AdminBlogAddEdit v-model="visible" :action :blogData @reload="getData"/>

  <ConfirmDialog/>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const visible = ref(false)

const action = ref(ACTION.ADD)

const blogData = ref()

const openAddBlog = async () => {
  action.value = ACTION.ADD
  visible.value = true
}

const openEditBlog = async data => {
  action.value = ACTION.EDIT
  visible.value = true
  blogData.value = data
}

const blogs = useState('blogs')

const columns = [
  { field: 'index', header: 'No.', isIndex: true },
  { field: 'title', header: 'Title' },
  { field: 'author', header: 'Author' },
  { field: 'route', header: 'Permalink' },
  { field: 'created_time', header: 'Created At', isTime: true },
  { field: 'publish_time', header: 'Published At', isTime: true },
  { field: '', header: 'Action', isAction: true }
]

const loading = useState('loading')

const confirm = useConfirm()

const toast = useToast()

const confirmDelete = id => {
  confirm.require({
    message: 'Are you sure you want to delete this blog?',
    header: 'Confirmation',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Confirm'
    },
    accept: () => {
      handleDelete(id)
    },
  })
}

const handleDelete = async id => {
  loading.value = true
  const res = await deleteBlog({ id })
  loading.value = false

  if (!res?.success) {
    toast.add(getErrorToast(res?.message || 'Unknown error. Please try again'))
    return
  }

  toast.add(getSuccessToast('Blog deleted successfully.'))
  await getData(1)
}

const confirmPublish = id => {
  confirm.require({
    message: 'Are you sure you want to publish this blog?',
    header: 'Confirmation',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Confirm'
    },
    accept: () => {
      handlePublish(id)
    },
  })
}

const handlePublish = async id => {
  loading.value = true
  const res = await publishBlog({ id })
  loading.value = false

  if (!res?.success) {
    toast.add(getErrorToast(res?.message || 'Unknown error. Please try again'))
    return
  }

  toast.add(getSuccessToast('Blog published successfully.'))
  await getData(1)
}

const loadingTable = ref(false)

const getData = async (page) => {
  loadingTable.value = true
  await getAllBlogs(page)
  loadingTable.value = false
}

const onPage = ({ page }) => {
  getData(page + 1)
}

getData(1)
</script>

<style scoped lang="scss">
.action {
  button {
    @apply flex border border-transparent rounded-md hover:border-primary;

    padding: 4px 8px;
  }
}
</style>