<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

        <BasePageHeader>
            PowerCampus Version Upgrades

            <template #subtitle>
                If finding time to keep up with PowerCampus and Self-Service upgrades is challenging, consider our
                comprehensive upgrade services. We can do virtually all of an upgrade for you, although we encourage
                your staff to participate in testing. However, if you prefer to manage your own upgrades, we also offer
                hourly rates to be on-call for any questions you may have along the way and troubleshooting challenges
                you may encounter.
            </template>
        </BasePageHeader>

        <BasePageContent>
            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Pricing
                </div>
                <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div v-for="(item, index) in pricings" :key="item.id" data-aos="zoom-in-down" data-aos-offset="50"
                        :data-aos-delay="index * 50">
                        <BaseCardItem class="resource-card !cursor-default">
                            <template #image>
                                <div class="flex items-center m-6 h-full">
                                    <div class="font-bold rew-text-brown text-2xl space-y-2">
                                        <div>
                                            {{ item.title }}
                                        </div>
                                        <div class="font-bold rew-text-green text-2xl">
                                            {{ item.range }}
                                        </div>
                                        <div class="p-card-subtitle italic text-sm font-normal">
                                            {{ item.content }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #title>
                                <div class="flex justify-center">
                                    <CallToAction />
                                </div>
                            </template>
                        </BaseCardItem>
                    </div>
                </div>
            </section>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
useHead({
    title: 'ReWorkflow - PowerCampus Version Upgrades',
})

definePageMeta({
    hideCTA: true,
    middleware: ['hidden']
})

const pricings = [
    {
        title: 'Comprehensive Upgrade',
        range: '$8,000 - $15,000',
        content: 'Costs vary based on customizations and the condition of your database.'
    },
    {
        title: 'PowerCampus Consulting',
        range: '$250-295/hr depending on volume',
        content: 'You manage and we support.'
    }
]
</script>