<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        Contact
      </template>

      <template #subtitle>
        <div>Speak to a <span class="rew-font rew-text-brown"><span class="rew-text-green">Re</span>Workflow</span> Slate Technician today!</div>
        <div>No sales dances and no obligations.  </div>
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm text-center">
        <a href="tel:2085469221" class="rew-text-green rew-font text-xl">208-546-9221</a>
      </section>
      <section class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm">
        <div id="form_bb62dd62-0117-4840-9cb8-28b8f99b4211">
          <div class="grid place-items-center">
            <svg class="logo" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 95.44">
              <path
                  d="M150,0h-75C46.82.18,27.74,19.91,27.74,47.72c0,10.78,2.89,20.33,8.05,28H0v19.72h75c.13,0,.25,0,.38,0,28.03,0,47.81-19.78,47.81-47.72,0-10.75-2.91-20.31-8.11-28h34.92V0ZM75.55,74.69c-13.13,0-24.22-9.31-24.22-27.05s10.91-26.88,24.22-26.88,24.12,9.22,24.12,26.88-11,27.05-24.12,27.05Z"
                  fill="#456b40" stroke-width="0"/>
            </svg>
          </div>
        </div>
      </section>
    </BasePageContent>
  </BasePageContainer>

</template>

<script setup>
onMounted(() => {
  const script = document.createElement('script')
  script.setAttribute('src', 'https://go.reworkflow.com/register/?id=bb62dd62-0117-4840-9cb8-28b8f99b4211&output=embed&div=form_bb62dd62-0117-4840-9cb8-28b8f99b4211')
  document.head.appendChild(script)
})

</script>

<style scoped lang="scss">
.logo {
  -webkit-animation: breathing 3s ease-out infinite normal;
  animation: breathing 3s ease-out infinite normal;
}


@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>
