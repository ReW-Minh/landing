<template>
    <div v-if="loading"
        class="position-absolute align-items-center justify-content-center top-50 start-50 translate-middle"
        style="display: flex">
        <div class="loading-indicator"></div>
    </div>
    <template v-else>
        <HeaderSection />

        <div class="mt">
            <slot />
        </div>

        <FooterSection />

        <ContactModal />

        <MobileMenu />
    </template>
</template>

<script setup>
import HeaderSection from '../../components/Header/HeaderSection.vue'
import FooterSection from '../../components/Footer/FooterSection.vue'
import ContactModal from '../../components/Inc/ContactModal.vue'
import MobileMenu from '../../components/Inc/MobileMenu.vue'

import { ref } from 'vue'
import { useBio } from '../../services/useBio'
import { usePowerCampus } from '../../services/usePowerCampus'
import { useHomeText } from '../../services/useHomeText'

const { getBio } = useBio()
const { getPowerCampusContent } = usePowerCampus()
const { getTextContent } = useHomeText()

getBio()
getPowerCampusContent()

const loading = ref(false)
const getAppText = async () => {
    loading.value = true
    await getTextContent()
    loading.value = false
}

getAppText()
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
