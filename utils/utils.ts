import { useAdminAuth, useProfiles } from '~/stores'
import type { IProfile } from '~/types/types';
import type { ToastMessageOptions } from 'primevue';

export const openProfile = (name: string) => {
    const profiles = useProfiles()

    const profile = profiles.value.find(p => p.name === name)

    if (!profile)
        return

    showProfile(profile)
}

// "Jon Rowand" -> "jon-rowand", used to deep link a team member (/about#team?m=jon-rowand)
export const getProfileSlug = (name: string) => name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const openProfileBySlug = (slug: string) => {
    if (!slug)
        return false

    const profiles = useProfiles()

    const profile = profiles.value.find(p => getProfileSlug(p.name) === getProfileSlug(slug))

    if (!profile)
        return false

    showProfile(profile)

    return true
}

const showProfile = (profile: IProfile) => {
    const profiles = useProfiles()

    // only one popup at a time
    profiles.value.forEach(p => {
        if (p.id !== profile.id && p.visible)
            p.visible = false
    })

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

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }

    return new Date(timestamp * 1000).toLocaleDateString("en-US", options)
}

export const getErrorToast = (detail: string): ToastMessageOptions => ({
    severity: 'error',
    summary: 'Error',
    detail,
    life: 3000
})

export const getSuccessToast = (detail: string): ToastMessageOptions => ({
    severity: 'success',
    summary: 'Success',
    detail,
    life: 3000
})

export const decorateText = (str: string, full?: boolean) => {
    if (!str)
        return

    if (full)
        return str.replaceAll(/ReWorkflow/g, `<span class="rew-font rew-text-brown"><span class="rew-text-green">Re</span>Workflow</span>`)

    return str.replaceAll(/ReW/g, `<span class="rew-font rew-text-brown"><span class="rew-text-green">Re</span>W</span>`)
}