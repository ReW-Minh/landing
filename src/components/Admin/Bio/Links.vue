<template>
    <label class="fw-bold text-capitalize">{{ type }}:</label>
    <Card v-show="model.length">
        <template #content>
            <DataTable :value="model" tableStyle="width: 100%">
                <Column header="No.">
                    <template #body="slotProps">
                        <span>{{ slotProps.index + 1 }}</span>
                    </template>
                </Column>
                <Column field="name" header="Name">
                    <template #body="slotProps">
                        <InputText v-model="slotProps.data.name" autocomplete="off" class="w-100" />
                    </template>
                </Column>
                <Column field="link" header="Link">
                    <template #body="slotProps">
                        <InputText v-model="slotProps.data.link" autocomplete="off" class="w-100" />
                    </template>
                </Column>
                <Column>
                    <template #body="slotProps">
                        <div class="d-flex align-items-center justify-content-center">
                            <Button icon="pi pi-trash" text @click="deletLink(slotProps.index)" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </template>
    </Card>
    <Button :label="`Add ${type}`" size="small" class="mt-2" icon="pi pi-plus" @click="addLink" />
</template>

<script setup>
defineProps(['type'])

const model = defineModel()

const addLink = () => {
    model.value.push({
        name: '',
        link: ''
    })
}
const deletLink = index => {
    model.value.splice(index, 1)
}

</script>