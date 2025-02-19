import { useAdminAuth } from '~/stores/index.js'
import type { IAdminLogin } from '~/types/types';

export const adminLogin = async (body: IAdminLogin) => {
    const admin = useAdminAuth()

    const res = await apiPost('login', { body })

    if (!res?.success)
        return

    sessionStorage.setItem('accessToken', res.data.token)

    admin.value.logged = true
    admin.value.token = res.data.token

    return res
}

export const adminLogout = () => {
    const admin = useAdminAuth()

    sessionStorage.removeItem('accessToken')

    admin.value.logged = false
    admin.value.token = null
}