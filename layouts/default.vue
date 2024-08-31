<template>
    <Header />

    <div class="mt min-h-[calc(100vh-270px)]">
        <slot />
    </div>

    <Footer />

    <ContactPopup />

    <template v-for="bio in profiles" :key="bio.id">
        <TeamPopup :bio v-model="bio.visible" />
    </template>
</template>

<script setup>
import { useProfiles } from '~/stores'

const profiles = useProfiles()
</script>

<style scoped>
.mt {
    margin-top: 109px
}

@media (max-width: 767px) {
    .mt {
        margin-top: 60px
    }
}
</style>
