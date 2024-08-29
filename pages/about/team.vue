<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

        <BasePageHeader>
            <div class="flex items-baseline justify-center gap-2">
                <span class="mr-0.5">The</span>
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                <span>Team</span>
            </div>
        </BasePageHeader>

        <BasePageContent>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div v-for="(bio, index) in PROFILES" :key="bio.id" data-aos="zoom-in-down" data-aos-offset="50"
                    :data-aos-delay="index * 50">
                    <TeamBio :bio />
                </div>
            </div>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
useHead({
    title: 'ReWorkflow - Our Team'
})
</script>

<style lang="scss" scoped>
@media (max-width: 720px) {
    .heading {
        img {
            width: 150px;
        }
    }
}
</style>