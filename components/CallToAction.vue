<template>
  <NuxtLink :to="link ?? '/contact'" :target="link ? '_blank' : '_self'" :title="label ?? 'Contact us'"
            class="rew-main-btn rew-box-shadow inline-flex items-center"
            :class="{ 'h-10 !text-base': size === 'md', 'footer': footer }">
    <span>{{ label ?? 'Contact' }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
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
  }
})
</script>