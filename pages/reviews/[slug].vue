<template>
  <BasePageContainer v-if="loading">
    <div class="flex items-center my-[200px]">
      <ProgressSpinner/>
    </div>
  </BasePageContainer>

  <template v-else>
    <div style="background: var(--rew-primary-green)" class="py-4 text-white">
      <BasePageContent>
        <div class="relative z-10">
          <img src="/img/logo-bg-white.png"
               class="absolute opacity-5 z-0 h-[175px] -right-[52px] top-1/2 -translate-y-1/2 -rotate-45"
               alt="background"/>
          <NuxtLink to="/reviews"
                    class="mb-3 inline-flex items-center pe-1 rounded-lg border border-transparent hover:border-white transition-all">
            <i class="pi pi-angle-left"></i>
            All ReViews
          </NuxtLink>

          <div class="flex items-center gap-6">
            <div class="space-y-2">
              <h1 class="rew-font text-4xl">
                {{ detail?.title }}
              </h1>
              <div class="opacity-85 text-sm md:text-lg">
                {{ formatDate(detail?.publish_time) }} - by <strong>{{ detail?.author }}</strong>
              </div>
            </div>
          </div>
        </div>
      </BasePageContent>
    </div>
    <BasePageContent>
      <div class="relative py-8">
        <div class="ck-content">
          <div v-html="detail?.content"></div>
        </div>
        <img src="/img/logo-bg.svg" alt="rew"
             class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 !opacity-5">
      </div>
    </BasePageContent>
  </template>
</template>

<script setup lang="ts">
import type { IBlogDetail } from '~/types/types';

const loading = ref(false)
const getData = async () => {
  loading.value = true
  const res = await getBlogDetail(useRoute().params.slug.toString())
  loading.value = false

  if (!res)
    navigateTo('/error')
}

const detail = useState<IBlogDetail>('blogDetail')

onMounted(async () => {
  await getData()
})
</script>