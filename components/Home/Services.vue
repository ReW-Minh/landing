<template>
  <section class="pt-4 overflow-hidden" id="service">
    <img src="/img/logo-bg.svg" alt="rew" class="bg-logo block md:hidden">
    <!-- <h2 class="rew-text-brown section-title">
      <span class="rew-text-green">Slaters</span>
      at your Service
    </h2> -->
    <div class="max-w-[960px] mx-auto hidden md:block px-4">
      <div class="grid grid-cols-2 gap-10">
        <div v-for="item, index in slaterRoles" class="my-n3">
          <div data-aos="zoom-out" :data-aos-delay="index * 100" class="card">
            <div class="card-img">
              <img :src="item.imgSrc" :alt="item.title" class="mx-auto">
            </div>
            <div class="card-title nowrap" v-html="item.title"></div>
            <div class="card-content" v-html="decorateText(item.content)"></div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-left" class="block md:hidden">
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
import { register } from 'swiper/element/bundle'

import role01Url from '/img/role01.svg'
import role01MobileUrl from '/img/role01.webp'
import role02Url from '/img/role02.svg'
import role02MobileUrl from '/img/role02.webp'
import role03Url from '/img/role03.svg'
import role03MobileUrl from '/img/role03.webp'
import role04Url from '/img/role04.svg'
import role04MobileUrl from '/img/role04.webp'

register()

const slaterRoles = ref([
  {
    imgSrc: role01Url,
    imgSrcMobile: role01MobileUrl,
    title: 'Captaining',
    content: 'Team up with our Slate subject matter experts to have embedded project management, cycle prep, and strategic advisement at the ready.'
  },
  {
    imgSrc: role02Url,
    imgSrcMobile: role02MobileUrl,
    title: 'Engineering',
    content: 'Let’s dream big together for implementing next-level Slate enhancements from portals and dashboards to workflow automations and system integrations.'
  },
  {
    imgSrc: role03Url,
    imgSrcMobile: role03MobileUrl,
    title: 'Operationalizing',
    content: 'Troubleshooting, routine maintenance, querying, data integrity, you name it! ReW’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities.'
  },
  {
    imgSrc: role04Url,
    imgSrcMobile: role04MobileUrl,
    title: 'ReInforcing',
    content: 'Looking for Slate-skilled seasonal readers and/or application  processors? In need of temporary coverage for a key Slater going on  leave? Need to train up your in-house talent? Call on ReW to bridge the gap.'
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