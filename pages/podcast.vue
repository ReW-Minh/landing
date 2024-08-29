<template>
    <BasePageContainer class="!pt-4">
        <div class="container-fluid">
            <img class="w-full aspect-[21/9] md:aspect-[21/4] object-cover rounded-xl shadow-lg"
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero">
        </div>

        <BasePageHeader>
            <div class="flex items-baseline justify-center gap-2 mt-6 md:mt-12">
                <span class="mr-0.5">The</span>
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                <span>Podcast</span>
            </div>
        </BasePageHeader>


        <BasePageContent>
            
        </BasePageContent>
    </BasePageContainer>
</template>

<script setup>
useHead({
    title: 'ReWorkflow - Podcast'
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