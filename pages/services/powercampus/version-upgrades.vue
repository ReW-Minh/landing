<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

        <BasePageContent>
            <NuxtLink to="/services/powercampus"
                class="mb-3 inline-flex items-center pe-1 rounded-lg border border-transparent hover:border-black transition-all">
                <i class="pi pi-angle-left"></i>
                PowerCampus
            </NuxtLink>
        </BasePageContent>

        <BasePageHeader>
            PowerCampus Version Upgrades

            <template #subtitle>
                Finding it challenging to keep up with PowerCampus and Self-Service upgrades? Consider our comprehensive
                upgrade services and tailored consulting services.
            </template>
        </BasePageHeader>

        <BasePageContent>
            <section>
                <div class="mb-3 text-3xl font-semibold rew-text-brown text-center">
                    <span class="rew-text-brown">Flexible, transparent pricing for every</span> <span
                        class="rew-text-green">PowerCampus School</span>
                </div>
                <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div v-for="item in pricings" :key="item.id">
                        <BaseCardItem :hoverEffect="false" class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
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
    title: 'ReWorkflow - PowerCampus Version Upgrades',
})

definePageMeta({
    hideCTA: true,
})

const pricings = [
    {
        title: 'Comprehensive Upgrade',
        range: '$8,000 - $12,000',
        content: 'Cost can vary depending on customizations, current version, and target version.'
    },
    {
        title: 'PowerCampus Consulting',
        range: '$220 - $295 per hour',
        content: `Your database gardening enriched with <span class="rew-font"><span class="rew-text-green">Re</span>W</span>'s expertise and support ensures strategic success! Take advantage of our partner discounts for hourly bundles and <span class="rew-text-green">Re</span>Hires.`
    }
]
</script>