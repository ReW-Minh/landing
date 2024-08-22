<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px] !opacity-5">

        <BasePageHeader>
            PowerFAIDS
        </BasePageHeader>

        <BasePageContent>
            <section class="space-y-8 text-lg rew-text-brown">
                <div data-aos="fade-right" data-aos-delay="50">
                    For schools using <span class="font-bold rew-text-green">PowerCampus</span> + <span
                        class="font-bold rew-text-brown-secondary">PowerFAIDS</span>, we offer a one-way, add-on
                    integration that transmits financial aid information from <span
                        class="font-bold rew-text-brown-secondary">PowerFAIDS</span> to
                    <span class="font-bold slate-text-blue">Slate</span>:
                </div>
                <ul data-aos="fade-right" data-aos-delay="100" class="italic list-inside list-disc">
                    <li>Checklist (missing docs) to keep your applicants informed</li>
                    <li>Packaging Status to keep your counselors informed</li>
                    <li>Awards to keep your counselors informed</li>
                </ul>
            </section>

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
definePageMeta({
    title: 'ReWorkflow - PowerCampus Version Upgrades',
    hideCTA: true
})

const pricings = [
    {
        title: 'PowerFAIDs Integration',
        range: '$2000',
        content: 'Costs vary based on customizations and the condition of your database.',
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