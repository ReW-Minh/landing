<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px] !opacity-5">

        <BasePageContent>
            <NuxtLink to="/services/powercampus"
                class="mb-3 inline-flex items-center pe-1 rounded-lg border border-transparent hover:border-black transition-all">
                <i class="pi pi-angle-left"></i>
                PowerCampus
            </NuxtLink>
        </BasePageContent>

        <BasePageHeader>
            PowerCampus to Slate Integration (PowerSlate)
        </BasePageHeader>

        <BasePageContent>
            <section class="space-y-8 text-lg rew-text-brown">
                <div>
                    <span class="font-bold rew-text-green rew-font">Re</span><span class="font-bold rew-font">W</span>
                    CTO <a class="font-bold underline profile-hover" role="button"
                        @click="openProfile('Wyatt Best')">Wyatt Best</a>, developed the first (and as far as
                    we know, only) real-time integration between
                    <span class="font-bold rew-text-green">PowerCampus</span> and <span
                        class="font-bold slate-text-blue">Slate</span>.
                    This open-source integration bridges <span class="font-bold slate-text-blue">Slate</span> and <span
                        class="font-bold rew-text-green">PowerCampus</span> API's and extends
                    beyond the <span class="font-bold rew-text-green">PowerCampus</span> API with extensive SQL
                    routines.
                </div>

                <div>
                    <div class="font-bold italic">
                        Standard data coverage includes:
                    </div>

                    <ul class="grid grid-cols-1 md:grid-cols-2 italic list-inside list-checkmark">
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

                <div>
                    <span class="font-bold rew-text-green">Power</span><span
                        class="font-bold slate-text-blue">Slate</span> offers
                    innovative techniques to save you time, like auto-updating a student's major based
                    on changes in <span class="font-bold slate-text-blue">Slate</span> (with safeguards), auto-mapping
                    new terms and
                    programs, and much more.
                </div>
            </section>

            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown text-center">
                    <span class="rew-text-brown">Flexible, transparent pricing for every</span> <span
                        class="rew-text-green">PowerCampus School</span>
                </div>

                <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div v-for="item in pricings" :key="item.id">
                        <BaseCardItem :hoverEffect="false" class="resource-card !bg-white/30 !backdrop-blur-sm">
                            <template #image>
                                <div class="flex items-center m-6 h-full">
                                    <div class="font-bold rew-text-brown text-2xl space-y-2">
                                        <div>
                                            {{ item.title }}
                                        </div>
                                        <div class="font-bold rew-text-green text-2xl">
                                            {{ item.range }}
                                        </div>
                                        <div v-html="item.content" class="p-card-subtitle italic text-sm font-normal">
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </BaseCardItem>
                    </div>
                </div>
            </section>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup lang="ts">
useHead({
    title: 'ReWorkflow - PowerSlate',
})

const pricings = [
    {
        title: 'Comprehensive Implementation',
        range: '$15,000 - $20,000',
        content: 'We can have your Slate-PowerCampus bridge ready for new student registration in as little as eight weeks.'
    },
    {
        title: 'PowerCampus Consulting',
        range: '$220 - $295 per hour',
        content: `Your database gardening enriched with <span class="rew-font"><span class="rew-text-green">Re</span>W</span>'s expertise and support ensures strategic success! Take advantage of our partner discounts for hourly bundles and <span class="rew-text-green">Re</span>Hires.`
    }
]
</script>