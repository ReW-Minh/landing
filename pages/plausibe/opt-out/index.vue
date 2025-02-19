<template>
  <div class="container text-center mx-auto">
    <h1 class="text-5xl font-black mt-[150px]">
      Plausible Exclude
    </h1>

    <div class="my-4 text-xl">
      Click the button below to toggle your exclusion in analytics for this site
    </div>

    <div class="my-4 text-xl mb-12">
      You currently
      <span class="text-green-600 font-bold hidden" v-if="plausibleIgnore">are</span>
      <span class="text-red-600 font-bold hidden" v-else>are not</span>
      excluding your visits.
    </div>
    <a role="button" class="rew-main-btn"
       id="plausible_button" @click="toggleExclusion">{{ btnText }}</a>
  </div>
</template>

<script setup lang="ts">
const btnText = ref('Exclude my visits')
const plausibleIgnore = ref(false)

const checkState = () => {
  plausibleIgnore.value = window.localStorage.plausible_ignore === "true"

  btnText.value = plausibleIgnore.value ? 'Stop excluding my visits' : 'Exclude my visits'
}

onMounted(checkState)

const toggleExclusion = () => {
  const exclusionState = window.localStorage.plausible_ignore === "true"

  if (exclusionState) {
    delete window.localStorage.plausible_ignore
  } else {
    window.localStorage.plausible_ignore = "true"
  }

  checkState()
}
</script>