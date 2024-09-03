<template>
    <BasePageContainer class="!pt-4">
        <div class="container-fluid">
            <img class="w-full aspect-[21/9] md:aspect-[21/4] object-cover rounded-xl shadow-lg"
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero">
        </div>

        <BasePageHeader>
            <div class="flex items-baseline justify-center gap-2 mt-6 md:mt-12">
                <span class="mr-0.5">The</span>
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                <span>Podcast</span>
            </div>

            <template #subtitle>
                A podcast for all about Technolutions Slate CRM and the adventures of Slaters who build on it. Stay
                tuned for new episodes each month with host Megan Story.
            </template>
        </BasePageHeader>


        <BasePageContent :maxWidth="1488">
            <div>
                <p class="text-lg text-center mb-2 rew-text-brown font-semibold">Listen on:</p>
                <ul class="flex items-center justify-center gap-4 flex-wrap cc-podcast-apps list-unstyled podcast-app">
                    <li class="mb-2">
                        <a href="https://podcasts.apple.com/us/podcast/the-reworkflow-podcast-road-to-slate-summit/id1722159600"
                            class="modal-title" target="_blank" rel="noreferrer noopener" data-bs-placement="top"
                            v-tooltip.top="'Apple Podcasts'" aria-label="Apple Podcasts">
                            <img class="rounded-full w-11 shadow-lg Apple Podcasts"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/apple-podcast.png"
                                alt="Apple Podcasts">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://r4j68.app.goo.gl/?link=https%3A%2F%2Fpodcast.reworkflow.com%3Faction%3DopenPodcast%26podcastId%3Dpbblog17744163%26podcastIdTag%3Dkjbx3&amp;dfl=https%3A%2F%2Fpodcast.reworkflow.com&amp;utm_campaign=pb_web&amp;utm_source=podbean_web&amp;utm_medium=dlink&amp;imv=670&amp;amv=530&amp;isi=973361050&amp;ibi=com.podbean.app.podcast&amp;ipbi=com.podbean.app.podcast&amp;apn=com.podbean.app.podcast"
                            class="modal-title" target="_blank" rel="noreferrer noopener"
                            v-tooltip.top="'Podbean App'" aria-label="Podbean App">
                            <img class="rounded-full w-11 shadow-lg Podbean App"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/podbean-app.png"
                                alt="Podbean App">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://open.spotify.com/show/4b40iBygXiZax2cMFWZRjG" class="modal-title"
                            target="_blank" rel="noreferrer noopener" v-tooltip.top="'Spotify'"
                            aria-label="Spotify">
                            <img class="rounded-full w-11 shadow-lg Spotify"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/spotify.png" alt="Spotify">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://music.amazon.com/podcasts/6439f399-ee81-46f4-aa9f-51e4d77d7cfb"
                            class="modal-title" target="_blank" rel="noreferrer noopener"
                            v-tooltip.top="'Amazon Music'" aria-label="Amazon Music">
                            <img class="rounded-full w-11 shadow-lg Amazon Music"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/AmazonMusic.png"
                                alt="Amazon Music">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://iheart.com/podcast/136793112" class="modal-title" target="_blank"
                            rel="noreferrer noopener" v-tooltip.top="'iHeartRadio'" aria-label="iHeartRadio">
                            <img class="rounded-full w-11 shadow-lg iHeartRadio"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/iHeartRadio.png"
                                alt="iHeartRadio">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://player.fm/series/3540191" class="modal-title" target="_blank"
                            rel="noreferrer noopener" v-tooltip.top="'PlayerFM'" aria-label="PlayerFM">
                            <img class="rounded-full w-11 shadow-lg PlayerFM"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/PlayerFM.png" alt="PlayerFM">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a class="modal-title" target="_blank" rel="noreferrer noopener"
                            v-tooltip.top="'Search the podcast title on Samsung Podcast app.'"
                            aria-label="Search the podcast title on Samsung Podcast app.">
                            <img class="rounded-full w-11 shadow-lg Samsung"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/Samsung.png" alt="Samsung">
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://www.boomplaymusic.com/podcasts/86463" class="modal-title" target="_blank"
                            rel="noreferrer noopener" v-tooltip.top="'BoomPlay'" aria-label="BoomPlay">
                            <img class="rounded-full w-11 shadow-lg BoomPlay"
                                src="https://pbcdn1.podbean.com/fs1/site/images/admin5/BoomPlay.png" alt="BoomPlay">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div v-for="(item, index) in podcastEpisodes" :key="item.id" data-aos="zoom-in-down"
                    data-aos-offset="50" :data-aos-delay="index * 50">
                    <NuxtLink :to="`/podcast/${item.id}`">
                        <BaseCardItem squareImage>
                            <template #image>
                                <img :src="item.logo" :alt="item.title" />
                            </template>

                            <template #title>
                                <div class="line-clamp-1">
                                    {{ item.title }}
                                </div>
                            </template>

                            <template #subtitle>
                                <div class="opacity-60">
                                    <i>{{ formatDate(item.publish_time) }}</i>

                                    <div class="line-clamp-2 mt-2" v-html="item.content"></div>
                                </div>
                            </template>
                        </BaseCardItem>
                    </NuxtLink>
                </div>
            </div>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
useHead({
    title: 'ReWorkflow - Podcast'
})

const podcastEpisodes = useState('podcastEpisodes')

const loading = ref(false)
const getData = async () => {
    loading.value = true
    await getPodcastEpisodes()
    loading.value = false
}

await getData()
</script>

<style lang="scss" scoped>
@media (max-width: 720px) {
    .heading {
        img {
            width: 150px;
        }
    }
}
</style>