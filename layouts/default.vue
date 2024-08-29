<template>
    <Header />

    <div class="mt">
        <slot />
    </div>

    <Footer />

    <ContactPopup />

    <template v-for="bio in PROFILES" :key="bio.id">
        <TeamPopup :bio v-model="bio.visible" />
    </template>
</template>

<script setup>
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
