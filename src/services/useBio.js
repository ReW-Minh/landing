import { fetchPost, fetchGet } from '../utils/index.js'
import { notiToast } from '../utils/index.js'
import { useLoadingStore } from '../store/loading.js'
import { ref } from 'vue'

const bios = ref([])

const getBio = async () => {
    const { setLoading } = useLoadingStore()

    setLoading(true)
    const res = await fetchGet('getBio')
    setLoading(false)

    if (!res?.success)
        return

    bios.value = res.data
}

const addBio = async (payload) => {
    const res = await fetchPost('createBio', payload)

    if (res?.success)
        notiToast(res?.message)

    return res
}

const updateBio = async (payload) => {
    const res = await fetchPost('updateBio', payload)

    if (res?.success)
        notiToast(res?.message)

    return res
}

const updateBioOrder = async (list) => {
    const res = await fetchPost('updateBioOrder', { list })

    if (res?.success)
        notiToast(res?.message)

    return res
}

const deleteBio = async (id) => {
    const res = await fetchGet('deleteBio', { id })

    if (res?.success)
        notiToast(res?.message)

    return res
}

export const useBio = () => ({
    bios,
    getBio,
    addBio,
    updateBio,
    updateBioOrder,
    deleteBio
})