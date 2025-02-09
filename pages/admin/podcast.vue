<template>
  <div class="space-y-3">
    <div class="flex justify-end">
      <Button label="Sync Podbean Data" @click="handelSyncData" :loading
              :style="{ backgroundColor: 'var(--rew-primary-green)' }"/>
    </div>

    <h1 class="rew-font rew-text-brown text-3xl text-center">
      The <span class="rew-text-green">Re</span>Workflow Podcast
    </h1>

    <DataTable :value="podcastEpisodes?.episodes" scrollable scrollHeight="calc(100vh - 120px)" removableSort rowHover
               stripedRows :loading="loadingTable">
      <template v-for="col of columns" :key="col.field">
        <Column :field="col.field" :header="col.header" :sortable="col.sortable">
          <template #body="slotProps">
            <div class="line-clamp-2">
              <img v-if="col.isImage" :src="slotProps.data[col.field]" :alt="slotProps.data[col.field]"
                   class="w-[70px] rounded"/>

              <a class="rew-text-green underline text-nowrap" target="blank" v-else-if="col.isURL"
                 :href="slotProps.data[col.field]">Click to open</a>

              <span v-else-if="col.isTime">
                {{ formatDate(slotProps.data[col.field]) }}
              </span>

              <span v-else-if="col.isDuration">
                {{ new Date(slotProps.data[col.field] * 1000).toISOString().slice(11, -5) }}
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
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const toast = useToast()

const loading = ref(false)
const handelSyncData = async () => {
  loading.value = true
  const res = await syncPodbeanData()
  loading.value = false

  if (!res?.success)
    return toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong, please try again later.',
      life: 3000
    })


  toast.add({ severity: 'success', summary: 'Success', detail: 'Data has been synced successfully.', life: 3000 })

  await getData()
}

const podcastEpisodes = useState('podcastEpisodes')

const columns = [
  { field: 'episode_number', header: 'Episode number' },
  { field: 'logo', header: 'Cover', isImage: true },
  { field: 'title', header: 'Title' },
  { field: 'publish_time', header: 'Publish Time', isTime: true, sortable: true },
  { field: 'duration', header: 'Duration', isDuration: true, sortable: true },
  { field: 'player_url', header: 'Player URL', isURL: true }
]

const loadingTable = ref(false)
const getData = async () => {
  loadingTable.value = true
  await getPodcastEpisodes()
  loadingTable.value = false
}

getData()
</script>