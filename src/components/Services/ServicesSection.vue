<template>
  <section class="pt-3" id="service">
    <img src="/src/assets/img/logo-bg.svg" alt="rew" class="bg-logo d-block d-md-none">
    <h2 class="rew-text-brown section-title">
      <span class="rew-text-green">Slaters</span>
      at your Service
    </h2>
    <div class="container d-md-block d-none">
      <div class="row justify-content-around">
        <div v-for="item, index in slaterRoles" class="col-6 col-lg-5 my-n3">
          <div data-aos="zoom-out" :data-aos-delay="index * 100" class="card">
            <div class="card-img">
              <img :src="item.imgSrc" :alt="item.title">
            </div>
            <div class="card-title nowrap" v-html="item.title"></div>
            <div class="card-content" v-html="decorateText(item.content)"></div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-left" class="d-block d-md-none">
      <swiper-container slides-per-view="1.4" centered-slides="true" space-between="7">
        <swiper-slide v-for="item in slaterRoles">
          <div class="card">
            <div class="card-img">
              <img :src="item.imgSrcMobile" :alt="item.title">
            </div>
            <div class="card-title" v-html="item.title">
            </div>
            <div class="card-content" v-html="decorateText(item.content)"></div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { register } from 'swiper/element/bundle'
import { useHomeText } from '../../services/useHomeText'

import role01Url from '@/assets/img/role01.svg'
import role01MobileUrl from '@/assets/img/role01.webp'
import role02Url from '@/assets/img/role02.svg'
import role02MobileUrl from '@/assets/img/role02.webp'
import role03Url from '@/assets/img/role03.svg'
import role03MobileUrl from '@/assets/img/role03.webp'
import role04Url from '@/assets/img/role04.svg'
import role04MobileUrl from '@/assets/img/role04.webp'

register()

const { textContent } = useHomeText()

const content = computed(() => textContent.value?.services)

const slaterRoles = ref([
  {
    imgSrc: role01Url,
    imgSrcMobile: role01MobileUrl,
    subTitle: 'Roles #1',
    title: computed(() => content.value?.block1.title),
    content: computed(() => content.value?.block1.content)
  },
  {
    imgSrc: role02Url,
    imgSrcMobile: role02MobileUrl,
    subTitle: 'Roles #2',
    title: computed(() => content.value?.block2.title),
    content: computed(() => content.value?.block2.content)
  },
  {
    imgSrc: role03Url,
    imgSrcMobile: role03MobileUrl,
    subTitle: 'Roles #3',
    title: computed(() => content.value?.block3.title),
    content: computed(() => content.value?.block3.content)
  },
  {
    imgSrc: role04Url,
    imgSrcMobile: role04MobileUrl,
    subTitle: 'Roles #4',
    title: computed(() => content.value?.block4.title),
    content: computed(() => content.value?.block4.content)
  },
])

const decorateText = str => {
  if (!str)
    return

  return str.replaceAll(/ReW/g, `<span class="rew-font"><span class="rew-text-green">Re</span>W</span>`)
}
</script>

<style scoped>
.section-title {
  text-transform: unset;
}

.my-n3 {
  margin-top: -30px;
  margin-bottom: -30px;
}
</style>