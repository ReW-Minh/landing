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
      <span class="text-green-600 font-bold hidden" id="plausible_yes">are</span>
      <span class="text-red-600 font-bold hidden" id="plausible_not">are not</span>
      excluding your visits.
    </div>
    <a role="button" class="rew-main-btn"
       id="plausible_button" @click="toggleExclusion">Exclude my visits</a>
  </div>
</template>

<script setup>
const checkState = () => {
  const exclusionState = window.localStorage.plausible_ignore === "true"

  if (exclusionState) {
    document.getElementById("plausible_not").classList.add('hidden')
    document.getElementById("plausible_yes").classList.remove('hidden')
    document.getElementById("plausible_button").innerHTML = 'Stop excluding my visits'
  } else {
    document.getElementById("plausible_yes").classList.add('hidden')
    document.getElementById("plausible_not").classList.remove('hidden')
    document.getElementById("plausible_button").innerHTML = 'Exclude my visits'
  }
}

onMounted(checkState)

const toggleExclusion = () => {
  const exclusionState = window.localStorage.plausible_ignore === "true"

  if (exclusionState) {
    delete window.localStorage.plausible_ignore
    document.getElementById("plausible_yes").classList.add('hidden')
    document.getElementById("plausible_not").classList.remove('hidden')
    document.getElementById("plausible_button").innerHTML = 'Exclude my visits'
  } else {
    window.localStorage.plausible_ignore = "true"
    document.getElementById("plausible_not").classList.add('hidden')
    document.getElementById("plausible_yes").classList.remove('hidden')
    document.getElementById("plausible_button").innerHTML = 'Stop excluding my visits'
  }
}
</script>