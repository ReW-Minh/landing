<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px] !opacity-5">

        <BasePageHeader>
            PowerCampus to Slate Integration (PowerSlate)
        </BasePageHeader>

        <BasePageContent>
            <section class="space-y-8 text-lg rew-text-brown">
                <div data-aos="fade-right" data-aos-delay="50">
                    <span class="font-bold rew-text-green rew-font">Re</span><span class="font-bold rew-font">W</span>
                    CTO <a class="font-bold underline profile-hover" role="button" @click="openProfile('Wyatt Best')">Wyatt Best</a>, developed the first (and as far as
                    we know, only) real-time integration between
                    <span class="font-bold rew-text-green">PowerCampus</span> and <span
                        class="font-bold slate-text-blue">Slate</span>.
                    This open-source integration bridges <span class="font-bold slate-text-blue">Slate</span> and <span
                        class="font-bold rew-text-green">PowerCampus</span> API's and extends
                    beyond the <span class="font-bold rew-text-green">PowerCampus</span> API with extensive SQL
                    routines.
                </div>

                <div>
                    <div data-aos="fade-right" data-aos-delay="100" class="font-bold italic">
                        Standard data coverage includes:
                    </div>

                    <ul data-aos="fade-right" data-aos-delay="100"
                        class="grid grid-cols-1 md:grid-cols-2 italic list-inside list-disc">
                        <li>Person</li>
                        <li>IPEDS Ethnicity</li>
                        <li>Scholarships</li>
                        <li>Notes</li>
                        <li>Academics</li>
                        <li>Education (Schools)</li>
                        <li>Associations</li>
                        <li>Scheduled Actions</li>
                        <li>Demographics</li>
                        <li>Test Scores</li>
                        <li>Stops</li>
                        <li>User Defined Fields</li>
                    </ul>
                </div>

                <div data-aos="fade-right" data-aos-delay="150">
                    <span class="font-bold rew-text-green">Power</span><span
                        class="font-bold slate-text-blue">Slate</span> offers
                    innovative techniques to save you time, like auto-updating a student's major based
                    on changes in <span class="font-bold slate-text-blue">Slate</span> (with safeguards), auto-mapping
                    new terms and
                    programs, and much more.
                </div>
            </section>

            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown">
                    Pricing
                </div>

                <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div v-for="(item, index) in pricings" :key="item.id" data-aos="zoom-in-down" data-aos-offset="50"
                        :data-aos-delay="index * 50">
                        <BaseCardItem :hoverEffect="false" class="resource-card">
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
                                    <CallToAction :label="item.link && 'ReSource'" :link="item.link" />
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
    middleware: ['hidden']
})

const pricings = [
    {
        title: 'Open-Source Code',
        range: 'Free',
        content: 'As an open-source solution, anyone is free to download the integration and contribute to the community code base.',
        link: POWERCAMPUS_LINK,
    },
    {
        title: 'Comprehensive Implementation',
        range: '$15,000 - $20,000',
        content: 'Implementation times vary, but we can have new students ready to register in PowerCampus in as little as eight weeks.'
    },
    {
        title: 'PowerCampus Consulting',
        range: '$250 per hour',
        content: 'You manage and we support.'
    }
]
</script>

<style scoped lang="scss">
.list-disc {
    li::marker {
        color: var(--rew-primary-green) !important
    }
}
</style>