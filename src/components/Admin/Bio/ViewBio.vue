<template>
    <Button icon="pi pi-eye" text @click="visible = true" />

    <Dialog v-model:visible="visible" modal style="width: 100%; max-width: 850px; margin: 0 12px; border: none"
        :closable="true" :header="data.name" class="view-bio" @hide="props.data.visible = false">
        <div class="text-center mb-3">
            <img v-if="data.picture" class="profile-img rounded" :src="`${baseUrl}${data.picture}`" />
        </div>

        <div class="ql-editor p-2" style="width: unset">
            <div v-html="data.content"></div>
        </div>

        <div v-if="presentations?.length" class="p-2">
            <strong>Presentations</strong>
            <ul class="d-flex align-items-center links">
                <li v-for="item in presentations" :key="item.name">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>

        <div v-if="publications?.length" class="p-2">
            <strong>Publications</strong>
            <ul class="links">
                <li v-for="item in publications" :key="item.name">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const baseUrl = import.meta.env.VITE_URL_API

const visible = ref(false)

const props = defineProps(['data', 'public'])

const presentations = computed(() => {
    if (!props.data?.presentations)
        return []

    return JSON.parse(props.data.presentations)
})

const publications = computed(() => {
    if (!props.data?.publications)
        return []

    return JSON.parse(props.data.publications)
})

watch(() => props.data.visible, () => {
    visible.value = props.data.visible
})
</script>

<style scoped lang="scss">
.profile-img {
    height: 230px;
}

.links {
    padding: 0;
    margin: 0;
    list-style: none;

    &:not(.d-flex) {
        li {
            &::after {
                display: none;
            }
        }
    }

    li {
        margin-right: 10px;

        &:not(:last-child) {
            position: relative;

            &::after {
                content: '';
                height: 60%;
                width: 2px;
                top: 54%;
                right: -6px;
                transform: translateY(-50%);
                background-color: var(--rew-secondary-green);
                position: absolute;
            }
        }

        a {
            font-size: 14px;
            color: var(--rew-primary-green)
        }
    }
}
</style>

<style lang="scss">
.view-bio {
    .p-dialog-header {
        padding-top: 8px;
        padding-bottom: 8px;
    }
}
</style>