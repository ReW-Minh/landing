<template>
    <div class="containter mx-auto mt-5 py-5"
        style="max-width: 1000px; min-height: calc(100vh - 109px - 393px - 88px - 48px);">
        <Bio :public="true" />
        <ComingSoon v-if="!store.loading && !bios?.length" />
    </div>
</template>

<script setup>
import Bio from '../admin/Bio.vue'

import { useLoadingStore } from '../../store/loading'
import { useBio } from '../../services/useBio'

const { bios } = useBio()

const store = useLoadingStore()
</script>