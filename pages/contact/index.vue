<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>Contact</BasePageHeader>

    <div class="max-w-[1280px] m-auto px-5">
      <div class="grid grid-cols gap-x-12 gap-y-2 grid-cols-5">
        <div class="col-span-5 md:col-span-5 order-last md:order-first mt-5 md:mt-0">
          <div class="font-semibold text-[22px] md:text-[30px] rew-text-brown text-center md:text-left">
            Write Us
          </div>

          <section class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm mt-1 md:mt-5" id="formDestination">

          </section>
        </div>

<!--        <div class="col-span-5 md:col-span-2 order-first md:order-last space-y-1 md:space-y-5">
          <div class="font-semibold text-[22px] md:text-[30px] rew-text-brown text-center md:text-left">
            Call Us
          </div>

          <section class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm mt-1 md:mt-5">
            <div class="font-normal text-[16px] md:text-[18px] rew-text-brown text-center md:text-left">
              We'd love to hear your challenges! Call us for a quick, informed opinion.
            </div>

            <div
                class="flex items-center justify-center md:justify-start gap-4 rew-text-green rew-font text-[24px] md:text-[30px]">
              <a href="tel:2085469221">
                <IconPhone width="24" height="24" fill="var(&#45;&#45;rew-primary-green)"/>
              </a>
              208-546-9221
            </div>
          </section>
        </div>-->
      </div>
    </div>
  </BasePageContainer>

</template>

<script setup lang="ts">
onMounted(() => {
  const newParent = document.getElementById('formDestination')
  const oldParent = document.getElementById('formLoad')

  if (newParent && oldParent)
    newParent.append(...oldParent.childNodes)
})

onBeforeUnmount(() => {
  const newParent = document.getElementById('formDestination')
  const oldParent = document.getElementById('formLoad')

  if (newParent && oldParent)
    oldParent.append(...newParent.childNodes)
})
</script>