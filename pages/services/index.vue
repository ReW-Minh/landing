<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !fixed !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        <span class="rew-text-green">Slaters</span> at Your Service
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section class="grid grid-cols-5 gap-x-4 -mb-8">
        <div class="rew-text-brown md:col-span-3 col-span-5 text-[20px] md:text-[26px] font-bold flex items-center">
          <div class="text-center md:text-left">
          We can help with a vast range of Slate challenges. All <span class="rew-font"><span
              class="rew-text-green">Re</span>W</span> services follow our simple, flexible pricing model.
          </div>
        </div>

        <div class="col-span-2 hidden md:block">
          <img src="/img/role01.svg" alt="slate_services" class="w-full"/>
        </div>
      </section>

      <HomeServices/>

      <section>
        <ul class="flex flex-wrap gap-x-8 gap-y-3 md:gap-y-0 w-full justify-center text-xl font-semibold rew-text-brown text-center">
          <li>Rapid Onboarding</li>
          <li>Unrestricted Support</li>
          <li>Transparency</li>
          <li>No Long-Term Commitments Required</li>
        </ul>

        <div class="flex justify-center mt-8">
          <div class="border rounded-full shadow !bg-white/30 !backdrop-blur-sm hover:!shadow-md transition-all">
            <RouterLink
                class="text-3xl font-semibold text-gradient-animation block px-6 py-2"
                to="/pricing">
              Pricing
            </RouterLink>
          </div>
        </div>
      </section>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'ReWorkflow - Slate',
})
</script>

<style scoped lang="scss">
.resource-card {
  .text-heading {
    transition: all ease-in-out .2s;
    background-color: var(--rew-primary-green);
  }

  &:hover {
    .resource-icon {
      background-color: var(--rew-primary-brown);

      svg {
        transform: scale(1.05);
      }
    }

    .text-heading {
      @apply text-[1.9rem];

      background-color: var(--rew-primary-brown);
    }
  }
}

.resource-icon {
  transition: all ease-in-out .2s;
  background-color: var(--rew-primary-green);

  svg {
    transition: all ease-in-out .2s;
    height: 170px;
    width: 220px;

    &:not(.resource) {
      * {
        fill: white;
      }
    }
  }
}
</style>