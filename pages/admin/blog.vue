<template>
  <div class="space-y-3">
    <div class="flex justify-end">
      <Button label="Add Blog" @click="openAddBlog"
              :style="{ backgroundColor: 'var(--rew-primary-green)' }"/>
    </div>

    <h1 class="rew-font rew-text-brown text-3xl text-center">
      The <span class="rew-text-green">Re</span>Views
    </h1>

    <DataTable :value="podcastEpisodes?.episodes" scrollable scrollHeight="calc(100vh - 120px)" removableSort rowHover
               stripedRows :loading="loadingTable">
      <template v-for="col of columns" :key="col.field">
        <Column :field="col.field" :header="col.header" :sortable="col.sortable">
          <template #body="slotProps">
            <div class="line-clamp-2">
              <span v-if="col.isTime">
                {{ formatDate(slotProps.data[col.field]) }}
              </span>

              <span v-else>
                {{ slotProps.data[col.field] }}
              </span>
            </div>
          </template>
        </Column>
      </template>
    </DataTable>
  </div>

  <AdminBlogAddEdit v-model="visible" :action />
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const visible = ref(false)

const action = ref('Add')
const openAddBlog = async () => {
  action.value = 'Add'
  visible.value = true
}

const podcastEpisodes = useState('podcastEpisodes')

const columns = [
  { field: 'episode_number', header: 'No.' },
  { field: 'logo', header: 'Title' },
  { field: 'title', header: 'Author' },
  { field: '', header: 'Permalink' },
  { field: 'publish_time', header: 'Created At', isTime: true },
  { field: 'publish_time', header: 'Published At', isTime: true },
]

const loadingTable = ref(false)
const getData = async () => {
  loadingTable.value = true
  await getPodcastEpisodes()
  loadingTable.value = false
}

getData()
</script>