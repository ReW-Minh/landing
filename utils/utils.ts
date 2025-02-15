import { useAdminAuth, useProfiles } from '~/stores'

export const openProfile = (name: string) => {
    const profiles = useProfiles()

    const profile = profiles.value.find(p => p.name === name)

    profile.visible = true
}

export const checkAdminLoggedIn = () => {
    const admin = useAdminAuth()
    const token = sessionStorage.getItem('accessToken')

    if (token) {
        admin.value.logged = true
        admin.value.token = token
    }

    if (!admin.value.logged)
        navigateTo('/admin/login')
}

export const formatDate = (timestamp: number) => {
    if (!timestamp)
        return ''

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }

    return new Date(timestamp * 1000).toLocaleDateString("en-US", options)
}

export const getErrorToast = (detail: string) => ({ severity: 'error', summary: 'Error', detail, life: 3000 })

export const getSuccessToast = (detail: string) => ({ severity: 'success', summary: 'Success', detail, life: 3000 })