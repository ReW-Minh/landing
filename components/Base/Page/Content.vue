<template>
    <div class="container-fluid space-y-12" :style="{ maxWidth }">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps(['maxWidth'])

const maxWidth = computed(() => `${props.maxWidth ?? 1000}px`)
</script>