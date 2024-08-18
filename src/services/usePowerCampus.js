import { fetchPost, fetchGet } from '../utils/index.js'
import { notiToast } from '../utils/index.js'
import { useLoadingStore } from '../store/loading.js'
import { ref } from 'vue'

const powerCampusContent = ref()

const getPowerCampusContent = async () => {
    const { setLoading } = useLoadingStore()

    setLoading(true)
    const res = await fetchGet('getPowerCampusContent')
    setLoading(false)

    if (!res?.success)
        return

    powerCampusContent.value = res.data
}

const savePowerCampusContent = async (content) => {
    const res = await fetchPost('savePowerCampusContent', { content })

    if (res?.success)
        notiToast(res?.message)

    return res
}

export const usePowerCampus = () => ({
    powerCampusContent,
    getPowerCampusContent,
    savePowerCampusContent
})