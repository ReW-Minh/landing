<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        <span class="rew-text-green">Slaters</span> at Your Service
      </template>
    </BasePageHeader>

    <BasePageContent>
      <HomeServices/>

      <section>
        <ul class="flex flex-wrap gap-x-4 w-full justify-center text-xl font-semibold rew-text-brown list-inside list-checkmark">
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

<script setup>
useHead({
  title: 'ReWorkflow - Slate',
})

const resources = [
  {
    type: CONTACT_TYPE.RESOURCE,
    title: `<span class="rew-text-green rew-font">Re</span>Source Articles`,
    link: SLATE_LINK,
  },
  {
    type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
    title: `Presentations`,
    link: 'https://resource.reworkflow.com/search?term=%5BPresentations%3DSlate%5D'
  },
  {
    type: CONTACT_TYPE.PODCAST,
    title: `Podcast`,
    link: '/podcast'
  }
]
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

.text-gradient-animation {
  background: linear-gradient(
          to right,
          #486C3C 20%,
          #768471 30%,
          #8F4A2C 70%,
          #433129 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>