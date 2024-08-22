<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

        <BasePageHeader>
            <template #default>
                PowerCampus
            </template>

            <template #subtitle>
                With nearly 15 years of PowerCampus experience, the
                <span class="rew-text-green rew-font">Re</span><span class="rew-text-brown rew-font">Workflow</span>
                Team has what it takes to assist with all
                your PowerCampus challenges.
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
                        <BaseCardItem class="resource-card" @click="openLink(item.link)">
                            <template #image>
                                <div class="resource-icon grid place-items-center h-full">
                                    <IconReSource v-if="item.type === CONTACT_TYPE.RESOURCE" />
                                    <IconPresentations v-if="item.type === CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS" />
                                    <IconGitHub v-if="item.type === CONTACT_TYPE.GITHUB" />
                                </div>
                            </template>
                            <template #title>
                                <div v-html="item.title"></div>
                            </template>
                        </BaseCardItem>
                    </div>
                </div>
            </section>

            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Services
                </div>
                <div class=" grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div v-for="(item, index) in services" :key="item.id" data-aos="zoom-in-down" data-aos-offset="50"
                        :data-aos-delay="index * 50">
                        <BaseCardItem class="resource-card service" @click="navigateTo(item.route)">
                            <template #image>
                                <div class="text-heading grid place-items-center text-center h-full font-bold text-white text-3xl"
                                    v-html="item.title"></div>
                            </template>
                            <template #title>
                                <div class="flex justify-center">
                                    <button title="Learn more"
                                        class="rew-main-btn rew-box-shadow inline-flex items-center h-10 !text-base">
                                        <span>Learn more</span>
                                        <span class="md:ml-3 ml-1">
                                            <IconDoubleArrow />
                                        </span>
                                    </button>
                                </div>
                            </template>
                        </BaseCardItem>
                    </div>
                </div>
            </section>

            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Other
                </div>
                <div class="-mb-12 text-xl rew-text-brown">
                    Need help with something else, like gap staffing, 1098-T compliance, or a specific challenge? We
                    would be
                    thrilled to help!
                </div>
            </section>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>

definePageMeta({
    title: 'ReWorkflow - PowerCampus'
})

const resources = [
    {
        type: CONTACT_TYPE.RESOURCE,
        link: POWERCAMPUS_LINK,
        title: `PowerCampus 
                <br /> 
                <span class="rew-text-green rew-font">Re</span>Source Articles`
    },
    {
        type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
        title: `PowerCampus 
                <br /> 
                Presentations`
    },
    {
        type: CONTACT_TYPE.GITHUB,
        title: `PowerCampus 
                <br /> 
                Open-Source Code`
    }
]

const services = [
    {
        route: '/services/powercampus/version-upgrades',
        title: `PowerCampus 
                <br /> 
                Version
                <br />
                Upgrades`
    },
    {
        route: '/services/powercampus/power-slate',
        title: `PowerCampus 
                <br /> 
                to Slate
                <br />
                Intergration
                <br />
                (PowerSlate)`
    },
    {
        route: '/services/powercampus/powerfaids',
        title: `PowerFAIDS
                <br /> 
                to Slate
                <br />
                Intergration`
    }
]

const openLink = link => {
    if (!link)
        return

    window.open(link, '_blank').focus()
}
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