<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !fixed !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <section id="mission" aria-labelledby="mission-heading">
      <AboutMission />
    </section>

    <section id="values" aria-labelledby="values-heading">
      <AboutValues />
    </section>

    <section id="team" aria-labelledby="team-heading">
      <AboutTeamSection />
    </section>

  </BasePageContainer>
</template>

<script setup lang="ts">
import { useProfiles } from '~/stores/index.js'

const { setupSectionObservers } = useActiveSection()

const route = useRoute()

const SECTIONS = ['mission', 'values', 'team']

/**
 * Reads the member slug from the link, supporting both
 * /about#team?m=jon-rowand (param inside the hash) and /about?m=jon-rowand#team
 */
const getMemberSlug = () => {
  const [, hashQuery] = route.hash.split('?')

  if (hashQuery) {
    const slug = new URLSearchParams(hashQuery).get('m')

    if (slug)
      return slug
  }

  const { m } = route.query

  return (Array.isArray(m) ? m[0] : m) || ''
}

const getSectionId = () => route.hash.split('?')[0].replace('#', '')

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
}

/**
 * Brings the linked section into view and opens the matching team member popup.
 */
const openFromLink = async () => {
  const slug = getMemberSlug()

  if (!slug)
    return

  const section = SECTIONS.includes(getSectionId()) ? getSectionId() : 'team'

  await nextTick()

  // cancels the smooth scroll the router may have started for the hash
  scrollToSection(section)

  // let images/fonts settle before locking the page behind the modal
  setTimeout(() => {
    scrollToSection(section)
    openProfileBySlug(slug)
  }, 350)
}

const profiles = useProfiles()

const openMemberSlug = computed(() => {
  const open = profiles.value.find(p => p.visible)

  return open ? getProfileSlug(open.name) : ''
})

/**
 * Mirrors the open popup in the address bar so the link is always shareable,
 * and drops the member param again once the popup is closed.
 * Uses replaceState rather than the router so it never re-scrolls the page.
 */
watch(openMemberSlug, slug => {
  const member = slug ? `?m=${ encodeURIComponent(slug) }` : ''

  history.replaceState(history.state, '', `${ route.path }#team${ member }`)
})

useHead({
  title: 'ReWorkflow - About',
  meta: [
    {
      name: 'description',
      content: 'Learn about ReWorkflow\'s mission, values, and team. We collaborate with education teams to build sustainable Slate systems.'
    }
  ]
})

// Set up intersection observers for scroll-based navigation highlighting
onMounted(() => {
  setupSectionObservers(SECTIONS)
  openFromLink()
})

// handles links clicked while already on this page
watch(() => route.fullPath, openFromLink)
</script>

<style>
#mission, #team {
  scroll-margin-top: 48px;
}

#values {
  scroll-margin-top: 20px;
}

</style>
