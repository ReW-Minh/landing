export const openProfile = name => {
    const profile = PROFILES.value.find(p => p.name === name)

    profile.visible = true
}