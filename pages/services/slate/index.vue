<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

        <BasePageHeader>
            <template #default>
                <span class="rew-text-green">Slaters</span> at Your Service
            </template>
        </BasePageHeader>

        <BasePageContent>
            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Free <span class="rew-text-green rew-font">Re</span>Sources
                </div>
                <div class=" grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div v-for="(item, index) in resources" :key="item.id" data-aos="zoom-in-down" data-aos-offset="50"
                        :data-aos-delay="index * 50">
                        <NuxtLink :to="item.link" :target="item.type === CONTACT_TYPE.PODCAST ? '_self' : '_blank'">
                            <BaseCardItem class="resource-card">
                                <template #image>
                                    <div class="resource-icon grid place-items-center h-full">
                                        <IconReSource v-if="item.type === CONTACT_TYPE.RESOURCE" />
                                        <IconPresentations
                                            v-if="item.type === CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS" />
                                        <IconPodcast v-if="item.type === CONTACT_TYPE.PODCAST" />
                                    </div>
                                </template>
                                <template #title>
                                    <div v-html="item.title"></div>
                                </template>
                            </BaseCardItem>
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Slate Support and Staffing Solutions
                </div>
                <HomeServices />
            </section>

            <section>
                <!-- <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Other
                </div> -->
                <HomeFAQ />
            </section>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
useHead({
    title: 'ReWorkflow - PowerCampus',
})

definePageMeta({
    middleware: ['hidden']
})

const resources = [
    {
        type: CONTACT_TYPE.RESOURCE,
        title: `<span class="rew-text-green rew-font">Re</span>Source Articles`,
        link: POWERCAMPUS_LINK,
    },
    {
        type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
        title: `Presentations`,
        link: 'https://resource.reworkflow.com/search?term=%5BPresentations%3DSlate%5D'
    },
    {
        type: CONTACT_TYPE.PODCAST,
        title: `Podcast`,
        link: '/podcast'
    }
]

const services = [
    {
        route: '/services/powercampus/power-slate',
        title: `Slate
                <br />
                Intergration
                <br />
                (PowerSlate)`
    },
    {
        route: '/services/powercampus/version-upgrades',
        title: `Version
                <br />
                Upgrades`
    },
    {
        route: '/services/powercampus/powerfaids',
        title: `PowerFAIDS
                <br />
                Intergration
                <br />
                Add-On`
    }
]
</script>

<style scoped lang="scss">
.resource-card {
    .text-heading {
        transition: all ease-in-out .2s;
        background-color: var(--rew-primary-green);
    }

    &:hover {
        .resource-icon {
            background-color: var(--rew-primary-brown);

            svg {
                transform: scale(1.05);
            }
        }

        .text-heading {
            @apply text-[1.9rem];

            background-color: var(--rew-primary-brown);
        }
    }
}

.resource-icon {
    transition: all ease-in-out .2s;
    background-color: var(--rew-primary-green);

    svg {
        transition: all ease-in-out .2s;
        height: 170px;
        width: 220px;

        &:not(.resource) {
            * {
                fill: white;
            }
        }
    }
}
</style>