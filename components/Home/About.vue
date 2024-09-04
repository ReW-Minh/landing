<template>
    <section class="pt-4 pb-12 pd:mb-0 overflow-hidden" id="about">
        <img src="/img/logo-bg.svg" alt="rew" class="bg-logo hidden md:block">
        <h2 data-aos="zoom-in-down" data-aos-duration="700" data-aos-delay="400"
            class="rew-text-brown section-title block-w-arrow">
            <span class="bg-grey-pill shadow md:shadow-none">
                The
                <span class="rew-text-green text-capitalize me-sm-0 rew-font" style="margin-right: -3px">Re</span>
                <span class="rew-font">W</span>
                Difference
            </span>
        </h2>
        <div ref="rescaleContent" class="about-content relative mx-auto hidden md:block">
            <img src="/img/tree.svg" alt="rew tree" class="mx-auto block">
            <div v-for="item in blockItems" data-aos="zoom-in" class="about-block shadow-xl" :class="item.class">
                <div class="about-block-title">{{ item.title }}</div>
                <div class="about-block-body" v-html="item.content"></div>
            </div>
        </div>
        <div class="about-content-mobile relative mx-auto block md:hidden">
            <div class="container-fluid">
                <div v-for="item in blockItems" data-aos="zoom-in-down" data-aos-offset="50"
                    class="about-block shadow-xl" :class="item.class">
                    <div class="about-block-title">{{ item.title }}</div>
                    <div class="about-block-body" v-html="item.content"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const rescaleContent = ref()

const calculateNewScale = () => {
    if (!rescaleContent.value)
        return

    let percentage = window.innerWidth / 1270

    if (percentage > 1)
        percentage = 1

    rescaleContent.value.setAttribute("style", `-moz-transform: scale(${percentage}); -webkit-transform: scale(${percentage}); transform: scale(${percentage});`)
}



const blockItems = ref([
    {
        class: 'block-1 block-w-arrow',
        title: 'Putting Down Roots',
        content: 'Whether serving temporary Slater coverage or as an ongoing Slate Captain, ReW’s sustainable solutions remain the same. Our work stands the test of time.'
    },
    {
        class: 'block-2 block-w-arrow',
        title: 'Slate Support to the Core',
        content: 'The acreage of ReW’s higher education expertise is vast. However, our mission focuses on providing Slate support tailored for enrollment management systems and operations.'
    },
    {
        class: 'block-3 block-w-arrow',
        title: 'Great Oaks from Little Acorns Grow',
        content: 'ReW is a lean collaborative of Slaters from diverse higher education backgrounds who hold the shared belief that no Slate instance is too small to make a mighty impact.'
    },
    {
        class: 'block-4',
        title: 'Into the SIS Weeds',
        content: 'Our team has extensive experience administering student information systems. We thrive on challenges to optimize Slate with data integrations and business processes.'
    }
])

onMounted(() => {
    calculateNewScale()
    window.addEventListener('resize', calculateNewScale)
})

onUnmounted(() => {
    window.removeEventListener('resize', calculateNewScale)
})
</script>