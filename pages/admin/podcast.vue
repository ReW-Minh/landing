<template>
    <div>
        <div class="flex justify-end">
            <Button label="Sync Podbean Data" @click="handelSyncData" :loading />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})


const loading = ref(false)
const handelSyncData = async () => {
    loading.value = true
    const res = await syncPodbeanData()
    loading.value = false

    if (!res?.success)
        return 
}
</script>