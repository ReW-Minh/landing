<script setup lang="ts">
const route = useRoute()

// keeps a member deep link alive on the legacy /about/team url
const member = Array.isArray(route.query.m) ? route.query.m[0] : route.query.m

await navigateTo(`/about#team${ member ? `?m=${ encodeURIComponent(member) }` : '' }`, { redirectCode: 301 })
</script>

<template>
  <div>Redirecting...</div>
</template>
