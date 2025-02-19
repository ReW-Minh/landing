<template>
    <BasePageContainer v-if="loading">
        <div class="flex items-center my-[200px]">
            <ProgressSpinner />
        </div>
    </BasePageContainer>

    <template v-else>
        <div style="background: var(--rew-primary-green)" class="py-4 text-white">
            <BasePageContent>
                <div class="relative z-10">
                    <img src="/img/logo-bg-white.png"
                        class="absolute opacity-5 z-0 h-[175px] -right-[52px] top-1/2 -translate-y-1/2 -rotate-45"
                        alt="background" />
                    <NuxtLink to="/podcast"
                        class="mb-3 inline-flex items-center pe-1 rounded-lg border border-transparent hover:border-white transition-all">
                        <i class="pi pi-angle-left"></i>
                        All episodes
                    </NuxtLink>
                    <div class="flex items-center gap-6">
                        <div class="w-[150px] md:w-[200px] aspect-square p-1 bg-white rounded-xl shadow-md">
                            <img :src="detail?.logo" :alt="detail?.title" class="rounded-lg">
                        </div>
                        <div class="space-y-1 md:space-y-2">
                            <div class="opacity-85 text-sm md:text-lg">
                                {{ formatDate(detail?.publish_time) }}
                            </div>
                            <h1 class="rew-font text-lg md:text-3xl">
                                {{ detail?.title }}
                            </h1>
                        </div>
                    </div>
                </div>
            </BasePageContent>
        </div>
        <BasePageContent>
            <div class="p-3 rounded-xl border shadow-md bg-[#f6f6f6] mt-12">
                <div ref="frameCover" class="relative h-[150px] overflow-hidden rounded-lg">
                    <iframe :src="detail?.player_url" class="absolute -top-[2px] -right-[1px]"
                        :style="{ width: frameWidth }" />
                </div>
            </div>

            <div class="relative pb-12">
                <div v-html="detail?.content" class="editor text-lg"></div>
                <img src="/img/logo-bg.svg" alt="rew"
                    class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 !opacity-5">
            </div>
        </BasePageContent>
    </template>
</template>

<script setup lang="ts">
import type { IPodcastDetail } from '~/types/types';

const loading = ref(false)
const getData = async () => {
    loading.value = true
    const res = await getPodcastEpisodeDetail(useRoute().params.slug)
    loading.value = false

    if (!res)
        navigateTo('/error')
}



const detail = useState<IPodcastDetail>('podcastEpisodeDetail')
const frameCover = ref()
const frameWidth = ref('0px')

const calculateFrameWidth = () => {
    const parentWidth = frameCover.value?.offsetWidth

    if (parentWidth > 950)
        return

    const coverSize = window.innerWidth <= 330 ? 103 : 151

    frameWidth.value = `${parentWidth + coverSize}px`
}

onMounted(async () => {
    await getData()

    calculateFrameWidth()

    window.addEventListener('resize', calculateFrameWidth)
})

window.removeEventListener('resize', calculateFrameWidth)
</script>