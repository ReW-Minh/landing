<template>
    <BasePageContainer>
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

        <BasePageHeader>
            <div class="flex items-baseline justify-center gap-2">
                <span class="mr-0.5">The</span>
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                <span>Team</span>
            </div>
        </BasePageHeader>

        <BasePageContent>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div v-for="(bio, index) in profiles" :key="bio.id">
                    <TeamBio :bio />
                </div>
            </div>
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
import { useProfiles } from '~/stores/index.js'

useHead({
    title: 'ReWorkflow - Our Team'
})

const profiles = useProfiles()
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