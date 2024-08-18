<template>
    <Button label="Rearrange" icon="pi pi-arrow-right-arrow-left" @click="showDialog" class="ms-2" />

    <Dialog v-model:visible="visible" modal style="margin: 0 12px; border: none" header="Rearrange" :closable="false">
        <OrderList v-model="model" dataKey="id" class="order-list" scrollHeight="356px">
            <template #option="{ option }">
                <div class="d-flex align-items-center" style="width: 80vw; max-width: 400px">
                    <div>
                        <img v-if="option.picture" class="profile-img rounded-1" :src="`${baseUrl}${option.picture}`" />
                        <img v-else alt="user picture" src="/src/assets/img/RWF_06@300.png"
                            class="profile-img rounded-1 opacity-75" />
                    </div>

                    <strong class="ms-2">{{ option.name }}</strong>
                </div>
            </template>
        </OrderList>
        <template #footer>
            <div class="d-flex justify-content-end mt-2">
                <Button class="me-2" type="button" label="Cancel" severity="secondary" @click="confirmCancel" />
                <Button type="button" label="Save" @click="confirmSave" :loading />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { useBio } from '../../../services/useBio'
import { ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'

const baseUrl = import.meta.env.VITE_URL_API

const { bios, updateBioOrder } = useBio()

const visible = ref(false)
const loading = ref(false)
const handleSaveOrder = async () => {
    loading.value = true
    const list = []
    model.value.forEach((bio, index) => {
        list.push({
            id: bio.id,
            order: index
        })
    })

    const res = await updateBioOrder(list)
    loading.value = false

    if (!res?.success)
        return

    bios.value = model.value
    visible.value = false
}

const model = ref([])
const showDialog = () => {
    model.value = bios.value
    visible.value = true
}

const confirm = useConfirm()
const confirmAction = ({ message, accept, reject }) => {
    confirm.require({
        message,
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
        accept,
        reject
    })
}
const confirmCancel = () => {
    const obj = {
        message: 'Do you want to cancel?',
        accept: () => { visible.value = false }
    }
    confirmAction(obj)
}
const confirmSave = () => {
    const obj = {
        message: 'Do you want to save changes?',
        accept: handleSaveOrder
    }
    confirmAction(obj)
}
</script>

<style lang="scss">
.order-list {
    .p-listbox {
        .p-listbox-list {
            .p-listbox-option {
                &.p-listbox-option-selected {
                    color: white;

                    .profile-img {
                        transition: all .2s ease-in-out;

                        &.opacity-75 {
                            filter: brightness(10);
                        }
                    }

                    &.p-focus {
                        color: white;
                    }
                }
            }
        }
    }

    .profile-img {
        width: 60px;
        height: 40px;
        object-fit: cover;
        border: 1px solid rgba(0, 0, 0, .1)
    }
}
</style>