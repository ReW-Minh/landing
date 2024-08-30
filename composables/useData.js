import { useAdminAuth } from '~/stores'

export const apiGet = (url, options) => {

    const admin = useAdminAuth()

    return $fetch(url, {
        headers: {
            Authorization: admin.value.logged ? `Bearer ${admin.value.token}` : '',
        },
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'GET',
        ...options
    })
}

export const apiPost = (url, options) => {

    const admin = useAdminAuth()

    return $fetch(url, {
        headers: {
            Authorization: admin.value.logged ? `Bearer ${admin.value.token}` : '',
        },
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'POST',
        ...options
    })
}