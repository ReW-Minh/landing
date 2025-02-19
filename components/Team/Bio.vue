<template>
    <BaseCardItem @click="bio.visible = true" squareImage>
        <template #image>
            <img @load="loading = false" alt="user picture" :src="bio.picture" class="bio-picture"
                :class="{ hidden: loading }" />
            <Skeleton v-if="loading" height="280px" borderRadius="0px" />
        </template>
        <template #title>{{ bio.name }}</template>
        <template #subtitle>
            <div class="max-line max-line-2 fs-7">
                <div>{{ bio.title }}</div>
            </div>
        </template>
    </BaseCardItem>
</template>

<script setup lang="ts">
defineProps(['bio'])

const loading = ref(true)
</script>