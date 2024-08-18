import { fetchPost, fetchGet } from '../utils/index.js'
import { notiToast } from '../utils/index.js'
import { useLoadingStore } from '../store/loading.js'
import { ref } from 'vue'

const textContent = ref()

const getTextContent = async () => {
    const { setLoading } = useLoadingStore()

    setLoading(true)
    const res = await fetchGet('getHomePageContent')
    setLoading(false)

    if (!res?.success)
        return

    textContent.value = JSON.parse(res.data)
}

const setTextContent = async (obj) => {
    const content = JSON.stringify(obj)
    const res = await fetchPost('saveHomePageContent', { content })

    if (res?.success)
        notiToast(res?.message)

    return res
}

export const useHomeText = () => ({
    textContent,
    getTextContent,
    setTextContent
})