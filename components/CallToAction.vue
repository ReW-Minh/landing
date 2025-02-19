<template>
  <NuxtLink :to="link ?? '/contact'" :target :title="label ?? 'Contact us'"
            class="rew-main-btn rew-box-shadow inline-flex items-center"
            :class="{ 'h-10 !text-base': size === 'md', 'footer': footer }">
    <span>{{ label ?? 'Contact' }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
  size: {
    type: String,
    default: 'md',
  },
  link: {
    type: String,
  },
  footer: {
    type: Boolean
  },
  internal: {
    type: Boolean,
  }
})

const target = computed(() => {
  if (props.internal)
    return '_self'

  return props.link ? '_blank' : '_self'
})
</script>