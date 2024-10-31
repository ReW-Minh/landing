<template>
  <section class="pt-4 md:pb-10 pb-6 overflow-hidden" id="service">
    <img src="/img/logo-bg.svg" alt="rew" class="bg-logo hidden md:block">
    <div class="max-w-[960px] mx-auto hidden md:block px-4">
      <div class="grid grid-cols-2 gap-10">
        <div v-for="item in slaterRoles" class="border rounded-xl bg-white/30 backdrop-blur-sm shadow">
          <div class="card !my-6 !mx-4">
            <div class="card-img">
              <img :src="item.imgSrc" :alt="item.title" class="mx-auto">
            </div>
            <div class="card-title nowrap" v-html="item.title"></div>
            <div class="card-content" v-html="decorateText(item.content)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block md:hidden">
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
    content: 'Team up with our Slate subject matter experts for embedded project management, cycle prep, and strategic advisement.'
  },
  {
    imgSrc: role02Url,
    imgSrcMobile: role02MobileUrl,
    title: 'Engineering',
    content: 'Let’s achieve big together for implementing next-level Slate enhancements – from portals and dashboards to workflow automations and system integrations.'
  },
  {
    imgSrc: role03Url,
    imgSrcMobile: role03MobileUrl,
    title: 'Operationalizing',
    content: 'Troubleshooting, routine maintenance, querying, reporting, data integrity – you name it! ReW’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities.'
  },
  {
    imgSrc: role04Url,
    imgSrcMobile: role04MobileUrl,
    title: 'ReInforcing',
    content: 'Looking for Slate-skilled, seasonal application readers or processors? Coverage for a key Slater going on leave? Need to train up your in-house talent? Call on ReW to bridge the gap.'
  },
])

const decorateText = str => {
  if (!str)
    return

  return str.replaceAll(/ReW/g, `<span class="rew-font"><span class="rew-text-green">Re</span>W</span>`)
}
</script>