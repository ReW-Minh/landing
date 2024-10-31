<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

    <BasePageHeader>
      <template #default>
        <span class="rew-text-green">Slaters</span> at Your Service
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section>
        <div class="mb-3 text-3xl font-semibold rew-text-brown">
          Free <span class="rew-text-green rew-font">Re</span>Sources
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="item in resources" :key="item.id">
            <NuxtLink :to="item.link" :target="item.type === CONTACT_TYPE.PODCAST ? '_self' : '_blank'">
              <BaseCardItem class="resource-card new-tab-hover">
                <template #image>
                  <div class="resource-icon grid place-items-center h-full">
                    <IconReSource v-if="item.type === CONTACT_TYPE.RESOURCE"/>
                    <IconPresentations
                        v-if="item.type === CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS"/>
                    <IconPodcast v-if="item.type === CONTACT_TYPE.PODCAST"/>
                  </div>
                </template>
                <template #title>
                  <div class="flex items-center">
                    <div v-html="item.title"></div>
                    <IconExternal v-if="item.type !== CONTACT_TYPE.PODCAST" />
                  </div>
                </template>
              </BaseCardItem>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section>
        <div class="mb-3 text-3xl font-semibold rew-text-brown">
          Flexible, transparent pricing for every <span class="slate-text-blue">Slate School</span>
        </div>
        <!--<HomeServices />-->
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <BaseCardItem :hoverEffect="false" :customHeight="true"
                          class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-2xl space-y-2">
                    <div>
                      Pay As You Go
                    </div>
                    <div class="font-bold rew-text-green text-2xl">
                      $285/hour
                    </div>
                    <div class="p-card-subtitle italic text-sm font-normal">
                      Post-pay monthly only for what you utilize.
                      Best for Slate teams that have operations in place and who are looking for the security of direct
                      access to extra Slater <span class="rew-font"><span class="rew-text-green">Re</span>Sources</span>
                      when urgencies arise.
                    </div>
                  </div>
                </div>
              </template>
              <template #title>
                <div class="flex justify-center">
                  <CallToAction/>
                </div>
              </template>
            </BaseCardItem>
          </div>

          <div>
            <BaseCardItem :hoverEffect="false" :customHeight="true"
                          class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-2xl space-y-2">
                    <div>
                      Bundles
                    </div>
                    <div class="font-bold rew-text-green text-2xl">
                      <div><span class="rew-text-brown">20 hrs:</span> $275/hour</div>
                      <div><span class="rew-text-brown">30 hrs:</span> $265/hour</div>
                      <div><span class="rew-text-brown">40 hrs:</span> $250/hour</div>
                      <div><span class="rew-text-brown">41+ Hours?</span> Contact us for a custom discounted quote.
                      </div>
                    </div>
                    <div class="p-card-subtitle italic text-sm font-normal">
                      Save with purchased hours in advance to use as needed. Best for Slate teams seeking greater
                      operations efficiencies, staff gap fills, implementations, and enhancement projects.
                    </div>
                  </div>
                </div>
              </template>
              <template #title>
                <div class="flex justify-center">
                  <CallToAction/>
                </div>
              </template>
            </BaseCardItem>
          </div>
        </div>
      </section>

      <section>
        <!--<HomeFAQ />-->
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
                to="/services/how-we-work">
              See How We Work
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

definePageMeta({
  middleware: ['hidden']
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