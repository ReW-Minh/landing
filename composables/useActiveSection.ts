/**
 * Composable to track the currently visible section on a page using Intersection Observer.
 * Used for scroll-based navigation highlighting.
 */

// Global state for the active section (shared across components)
const activeSection = ref<string | null>(null)

export function useActiveSection() {
  const route = useRoute()

  // Only track sections when on the about page
  const isAboutPage = computed(() => route.path === '/about')

  /**
   * Sets up intersection observers on the given section IDs.
   * Call this in the page component with the section IDs to track.
   */
  function setupSectionObservers(sectionIds: string[]) {
    if (!import.meta.client) return

    const observers: IntersectionObserver[] = []

    // Track intersection ratios for each section
    const sectionRatios = new Map<string, number>()

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const id = entry.target.id
        sectionRatios.set(id, entry.intersectionRatio)
      })

      // Find the section with the highest intersection ratio
      let maxRatio = 0
      let mostVisibleSection: string | null = null

      sectionRatios.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          mostVisibleSection = id
        }
      })

      // Only update if we have a visible section
      if (mostVisibleSection && maxRatio > 0) {
        activeSection.value = mostVisibleSection
      }
    }

    // Create observer with threshold array for smooth tracking
    const observer = new IntersectionObserver(observerCallback, {
      root: null, // viewport
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle portion of the viewport
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    })

    // Wait for DOM to be ready, then observe sections
    nextTick(() => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
          // Initialize with 0 ratio
          sectionRatios.set(id, 0)
        }
      })
    })

    observers.push(observer)

    // Cleanup function
    onUnmounted(() => {
      observers.forEach(obs => obs.disconnect())
      activeSection.value = null
    })
  }

  /**
   * Checks if a given hash route is the active section.
   * For use in navigation components to determine active state.
   */
  function isActiveSection(route: string): boolean {
    if (!isAboutPage.value) return false

    // Extract hash from route (e.g., '/about#mission' -> 'mission')
    const hash = route.split('#')[1]
    if (!hash) return false

    return activeSection.value === hash
  }

  /**
   * Checks if any about submenu item is active (for parent highlighting)
   */
  function hasActiveAboutSection(): boolean {
    return isAboutPage.value && activeSection.value !== null
  }

  return {
    activeSection: readonly(activeSection),
    isAboutPage,
    setupSectionObservers,
    isActiveSection,
    hasActiveAboutSection
  }
}
