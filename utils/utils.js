import { useProfiles, useAdminAuth } from '~/stores'

export const openProfile = name => {
    const porfiles = useProfiles()

    const profile = porfiles.value.find(p => p.name === name)

    profile.visible = true
}

export const checkAdminLoggedIn = () => {

    const admin = useAdminAuth()
    const token = sessionStorage.getItem('accessToken')

    if (token) {
        admin.value.logged = true
        admin.value.token = token
        navigateTo('/admin')
    }

    if (!admin.value.logged)
        navigateTo('/admin/login')
}