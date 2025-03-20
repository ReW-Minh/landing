<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px] !opacity-5">

    <BasePageHeader>
      <span class="rew-font"><span class="rew-text-green">Re</span>Views</span>

      <template #subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus eget lorem et facilisis. Nullam dapibus
        pulvinar nisi vel egestas.
      </template>
    </BasePageHeader>


    <BasePageContent :maxWidth="1488">
      <section class="text-xl rew-text-brown scroll-mt-10" id="epTitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus eget lorem et facilisis. Nullam dapibus
        pulvinar nisi vel egestas. Donec nec tellus mauris. Fusce ac sem ut justo vulputate varius. Vestibulum et nunc
        ac felis consectetur feugiat. Proin elementum consectetur sapien sed faucibus. Pellentesque lectus libero,
        eleifend in sapien.
      </section>

      <div class="grid grid-cols-5 gap-6">
        <div class="grid grid-cols-1 gap-6 col-span-6 lg:col-span-4 h-max">
          <div v-for="item in computedBlogs" :key="item.id" class="h-max max-h-[214px]">
            <NuxtLink :to="`/reviews/${item.route}`">
              <BaseCardItem :withImage="false">
                <template #title>
                  <div class="line-clamp-1 text-2xl">
                    {{ item.title }}
                  </div>
                </template>

                <template #subtitle>
                  <div>
                    <span class="opacity-60">
                      {{ formatDate(item.publish_time) }} - by <strong>{{ item.author }}</strong>
                    </span>

                    <div class="line-clamp-4 mt-2 max-h-[96px] overflow-hidden" v-html="item.content"></div>
                  </div>
                </template>
              </BaseCardItem>
            </NuxtLink>
          </div>
        </div>

        <div class="col-span-6 lg:col-span-1">
          <div class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm">
            <div class="text-2xl mb-2 font-semibold rew-text-brown">Write Us</div>
            <div id="formDestination"></div>
          </div>
        </div>
      </div>

      <Paginator :rows="BLOG_PAGE_LIMIT" :totalRecords="blogs?.total" @page="handlePage"/>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import type { IBlogPaging } from '~/types/types';
import type { PageState } from 'primevue';

useHead({
  title: 'ReWorkflow - ReViews'
})

clearNuxtState(['blogs'])

const blogs = useState<IBlogPaging>('blogs')

const page = ref(1)

const getData = async (page: number) => {
  useLoadingIndicator().start()
  await getPublishedBlogs(page)
  useLoadingIndicator().finish()
}

await getData(page.value)

const handlePage = async (data: PageState) => {
  await getData(data.page + 1)
  await nextTick(() => {
    document.querySelector('#blogTop')?.scrollIntoView({ block: 'start' })
  })
}

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

const computedBlogs = computed(() => blogs.value?.blogs.map(item => ({
  ...item,
  content: item.content.replace(/<figure[^>]*>\s*<img[^>]*>.*?<\/figure>/g, '')
})))
</script>