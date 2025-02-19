import { useAdminAuth } from '~/stores/index.js'
import type { IBaseResponse } from '~/types/types';

export const apiGet = (url: string, options?: any): Promise<IBaseResponse<any>> => {

    const admin = useAdminAuth()

    return $fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': admin.value.logged ? `Bearer ${admin.value.token}` : '',
        },
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'GET',
        ...options
    })
}

export const apiPost = (url: string, options?: any): Promise<IBaseResponse<any>> => {

    const admin = useAdminAuth()

    return $fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': admin.value.logged ? `Bearer ${admin.value.token}` : '',
        },
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'POST',
        ...options
    })
}