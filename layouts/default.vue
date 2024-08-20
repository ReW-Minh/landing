<template>
    <Header />

    <div class="mt">
        <slot />
    </div>

    <Footer />

    <ContactPopup />
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
