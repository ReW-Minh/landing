<template>
  <label class="!fixed z-10 right-4 top-[120px] cursor-pointer flex items-center gap-1 select-none rounded-xl bg-white/50 backdrop-blur-sm py-1 px-2 rew-text-brown">
    <Checkbox v-model="visible" :binary="true"/>
    <span>Show Services</span>
  </label>

  <Home/>

  <HomeServices v-if="visible"/>
</template>

<script setup>
const visible = ref(false);
</script>