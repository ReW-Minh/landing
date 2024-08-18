import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading',() => {
    const loading = ref(false)

    const setLoading = val => {
        loading.value = val
    }

    return {
        loading,
        setLoading
    }
})