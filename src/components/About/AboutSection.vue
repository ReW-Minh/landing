<template>
    <section class="pt-3" id="about">
        <img src="/src/assets/img/logo-bg.svg" alt="rew" class="bg-logo d-none d-md-block">
        <h2 class="rew-text-brown section-title block-w-arrow">
            <span class="bg-grey-pill">
                The
                <span class="rew-text-green text-capitalize me-sm-0 rew-font" style="margin-right: -3px">Re</span>
                <span class="rew-font">W</span>
                Difference
            </span>
        </h2>
        <div class="about-content position-relative mx-auto d-none d-md-block">
            <img src="/src/assets/img/tree.svg" alt="rew tree" class="mx-auto d-block">
            <div v-for="item in blockItems" data-aos="zoom-in" class="about-block" :class="item.class">
                <div class="about-block-title">{{ item.title }}</div>
                <div class="about-block-body" v-html="item.content"></div>
            </div>
        </div>
        <div class="about-content-mobile position-relative mx-auto d-block d-md-none">
            <div class="container-fluid">
                <div v-for="item in blockItems" data-aos="zoom-in-down" data-aos-offset="50" class="about-block"
                    :class="item.class">
                    <div class="about-block-title">{{ item.title }}</div>
                    <div class="about-block-body" v-html="item.content"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHomeText } from '../../services/useHomeText'

const { textContent } = useHomeText()
const content = computed(() => textContent.value?.about)

const calculateNewScale = () => {
    const el = document.querySelector(".about-content")
    if (!el) return
    let percentage = window.innerWidth / 1270;
    if (percentage > 1) percentage = 1
    el.setAttribute("style", `-moz-transform: scale(${percentage}); -webkit-transform: scale(${percentage}); transform: scale(${percentage});`)
}

window.addEventListener('resize', calculateNewScale)

const blockItems = ref([
    {
        class: 'block-1 block-w-arrow',
        title: computed(() => content.value?.block1.title),
        content: computed(() => content.value?.block1.content)
    },
    {
        class: 'block-2 block-w-arrow',
        title: computed(() => content.value?.block2.title),
        content: computed(() => content.value?.block2.content)
    },
    {
        class: 'block-3 block-w-arrow',
        title: computed(() => content.value?.block3.title),
        content: computed(() => content.value?.block3.content)
    },
    {
        class: 'block-4',
        title: computed(() => content.value?.block4.title),
        content: computed(() => content.value?.block4.content)
    }
])

onMounted(calculateNewScale)
</script>