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

  <div id="formLoad" class="hidden">
    <div id="form_bb62dd62-0117-4840-9cb8-28b8f99b4211">
      <div class="grid place-items-center">
        <svg class="logo-form" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 95.44">
          <path
              d="M150,0h-75C46.82.18,27.74,19.91,27.74,47.72c0,10.78,2.89,20.33,8.05,28H0v19.72h75c.13,0,.25,0,.38,0,28.03,0,47.81-19.78,47.81-47.72,0-10.75-2.91-20.31-8.11-28h34.92V0ZM75.55,74.69c-13.13,0-24.22-9.31-24.22-27.05s10.91-26.88,24.22-26.88,24.12,9.22,24.12,26.88-11,27.05-24.12,27.05Z"
              fill="#456b40" stroke-width="0"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfiles } from '~/stores'

const profiles = useProfiles()

onMounted(() => {
  const script = document.createElement('script')
  script.async = 1
  script.src = 'https://go.reworkflow.com/register/?id=bb62dd62-0117-4840-9cb8-28b8f99b4211&output=embed&div=form_bb62dd62-0117-4840-9cb8-28b8f99b4211'
  document.head.appendChild(script)
})
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
