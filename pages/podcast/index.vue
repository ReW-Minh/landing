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
        An engaging deep dive into Slate through the lens of the annual Slate Summit. New episodes released the
        second Tuesday of each month.
      </template>
    </BasePageHeader>


    <BasePageContent :maxWidth="1488">
      <div>
        <p class="text-lg text-center mb-2" style="color: var(--rew-secondary-green)">Click on an episode to
          listen
          here. Also, available to stream on:</p>
        <ul class="flex items-center justify-center gap-4 flex-wrap cc-podcast-apps list-unstyled podcast-app">
          <li class="mb-2">
            <a class="btn-connect"
               href="https://podcasts.apple.com/us/podcast/the-reworkflow-podcast-road-to-slate-summit/id1722159600"
               target="_blank" rel="noreferrer noopener" v-tooltip.top="'Apple Podcasts'"
               aria-label="Apple Podcasts">
              <IconApplePodcast/>
            </a>
          </li>
          <li class="mb-2">
            <a class="btn-connect" href="https://open.spotify.com/show/4b40iBygXiZax2cMFWZRjG"
               target="_blank" rel="noreferrer noopener" v-tooltip.top="'Spotify'" aria-label="Spotify">
              <IconSpotify/>
            </a>
          </li>
          <li class="mb-2">
            <a class="btn-connect"
               href="https://music.amazon.com/podcasts/6439f399-ee81-46f4-aa9f-51e4d77d7cfb"
               target="_blank" rel="noreferrer noopener" v-tooltip.top="'Amazon Music'"
               aria-label="Amazon Music">
              <IconAmazonMusic/>
            </a>
          </li>
          <li class="mb-2">
            <a class="btn-connect"
               href="https://r4j68.app.goo.gl/?link=https%3A%2F%2Fpodcast.reworkflow.com%3Faction%3DopenPodcast%26podcastId%3Dpbblog17744163%26podcastIdTag%3Dkjbx3&amp;dfl=https%3A%2F%2Fpodcast.reworkflow.com&amp;utm_campaign=pb_web&amp;utm_source=podbean_web&amp;utm_medium=dlink&amp;imv=670&amp;amv=530&amp;isi=973361050&amp;ibi=com.podbean.app.podcast&amp;ipbi=com.podbean.app.podcast&amp;apn=com.podbean.app.podcast"
               target="_blank" rel="noreferrer noopener" v-tooltip.top="'Podbean App'"
               aria-label="Podbean App">
              <IconPodbean/>
            </a>
          </li>
        </ul>
        <p class="text-lg text-center mb-2" style="color: var(--rew-secondary-green)">or search "<span
            class="rew-font rew-text-green">Re<span class="rew-text-brown">Workflow</span></span>" wherever
          you get
          your podcasts.</p>
      </div>


      <div>
        <div class="mb-3 text-3xl font-semibold rew-text-brown scroll-mt-10" id="epTitle">
          Episodes
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div v-for="item in podcastEpisodes?.episodes" :key="item.id">
            <NuxtLink :to="`/podcast/${item.permalink}`">
              <BaseCardItem squareImage>
                <template #image>
                  <img :src="item.logo" :alt="item.title"/>
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
      </div>

      <Paginator :rows="PODCAST_EP_PAGE_LIMIT" :totalRecords="podcastEpisodes?.total" @page="handlePage"/>

      <div>
        <div class="mb-3 text-3xl font-semibold rew-text-brown">
          What Guests and Listeners Are Saying
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="item in testimonials" :key="item.id">
            <div>
              <div class="flex items-center mt-6 mb-4">
                <div v-if="item.message" class="font-semibold rew-text-green text-2xl !italic"
                     v-html="item.message"></div>
              </div>
              <div class="font-bold rew-text-brown text-xl">
                {{ item.name }}
              </div>
              <div class="p-card-subtitle italic text-sm font-normal">
                {{ item.title }}
              </div>
              <div class="p-card-subtitle italic text-sm font-normal">
                {{ item.school }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import type { IPodcastPaging } from '~/types/types';
import type { PageState } from 'primevue';

useHead({
  title: 'ReWorkflow - Podcast'
})

clearNuxtState(['podcastEpisodes'])

const podcastEpisodes = useState<IPodcastPaging>('podcastEpisodes')

const page = ref(1)
const getData = async (page: number) => {
  useLoadingIndicator().start()
  await getPodcastEpisodes(page)
  useLoadingIndicator().finish()
}

await getData(page.value)

const handlePage = async (data: PageState) => {
  await getData(data.page + 1)
  await nextTick(() => {
    document.querySelector('#epTitle')?.scrollIntoView({ block: 'start' })
  })
}

const testimonials = [
  {
    id: 1,
    message: `"Megan makes her guests comfortable and confident while recording their episode. She’s a knowledgeable and generous host."`,
    name: 'Jasmine Solomon',
    title: 'Senior Associate Director, Systems Operations',
    school: 'New York University'
  },
  {
    id: 2,
    message: `"I have learned a lot from listening to the <span class="rew-font">Re<span class="rew-text-brown">Workflow</span></span> podcast, but perhaps nothing more surprising than the fact that host Megan Story is a self-professed introvert. The conversation in the podcast seems effortless with a wide variety of guests and topics from the Slate Community. Megan is a natural at this!"`,
    name: 'Eric Hoffpauir',
    title: 'CRM Specialist',
    school: 'Kansas State University Undergraduate Admission'
  },
  {
    id: 3,
    message: `"The <span class="rew-font">Re<span class="rew-text-brown">Workflow</span></span> Podcast offers a fantastic opportunity to explore diverse topics with various members of the Slate Community. From Jon Cherry's interactive presentation at the latest Summit to Matt Schieren's insights gleaned from years of Slate Community involvement, the podcast provides a wealth of knowledge and experiences!"`,
    name: 'Paul Turchan',
    title: 'Director of Community Support',
    school: 'Technolutions'
  }
]
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