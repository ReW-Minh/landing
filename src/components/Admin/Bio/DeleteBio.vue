<template>
    <Button icon="pi pi-trash" text @click="confirmDelete" />
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm'
import { useBio } from '../../../services/useBio'
import { useLoadingStore } from '../../../store/loading';

const { getBio, deleteBio } = useBio()

const { setLoading } = useLoadingStore()

const props = defineProps(['data'])

const handleDelete = async () => {
    setLoading(true)
    const res = await deleteBio(props.data.id)
    setLoading(false)

    if (!res?.success)
        return

    getBio()
}

const confirm = useConfirm()
const confirmDelete = () => {
    confirm.require({
        message: 'Do you want to delete this?',
        header: 'Confirmation',
        rejectProps: {
            label: 'No',
            severity: 'secondary',
            size: 'small'
        },
        acceptProps: {
            label: 'Yes',
            size: 'small'
        },
        accept: handleDelete,
        reject: () => { }
    })
}
</script>