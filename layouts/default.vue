<template>
  <Header/>

  <div class="mt md:min-h-[calc(100dvh-270px)] min-h-[calc(100dvh-334px)]">
    <slot/>
  </div>

  <Footer/>

  <ScrollTop icon="pi pi-angle-double-up" />

  <ContactPopup/>

  <template v-for="bio in profiles" :key="bio.id">
    <TeamPopup :bio v-model="bio.visible"/>
  </template>
</template>

<script setup>
import { useProfiles } from '~/stores'

const profiles = useProfiles()
</script>

<style scoped>
.mt {
  margin-top: 109px
}

@media (max-width: 767px) {
  .mt {
    margin-top: 60px
  }
}
</style>
