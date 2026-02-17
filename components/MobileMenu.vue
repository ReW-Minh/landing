<template>
  <Drawer v-model:visible="visible" header=" " position="right" class="mobile-menu-drawer">
    <div class="flex flex-col h-full overflow-hidden">
      <div class="grow mt-12">
        <Accordion>
          <template v-for="item in NAVIGATION_MENU">
            <AccordionPanel v-if="item.items" :value="item.label">
              <AccordionHeader>
                <NuxtLink
                  v-if="item.route"
                  :to="item.route"
                  @click="visible = false"
                  class="accordion-parent-link"
                  :class="{
                    'about-parent-active': item.route === '/about' && hasActiveAboutSection(),
                    'about-parent-inactive': item.route === '/about' && isAboutPage && !hasActiveAboutSection()
                  }">
                  {{ item.label }}
                </NuxtLink>
                <span v-else>{{ item.label }}</span>
              </AccordionHeader>
              <AccordionContent>
                <NuxtLink
                  class="block"
                  @click="visible = false"
                  v-for="sub in item.items"
                  :key="sub.label"
                  :to="sub.route"
                  :target="sub.isExternal ? '_blank' : '_self'"
                  :class="{
                    'scroll-active': isAboutHashRoute(sub.route) && isAboutSubItemActive(sub.route),
                    'scroll-inactive': isAboutHashRoute(sub.route) && isAboutPage && !isAboutSubItemActive(sub.route)
                  }">
                  {{ sub.label }}
                </NuxtLink>
              </AccordionContent>
            </AccordionPanel>
            <div v-else>
              <NuxtLink class="p-accordionheader border-bottom-pannel" @click="visible = false"
                        :to="item.route" :target="item.isExternal ? '_blank' : '_self'">
                {{ item.label }}
              </NuxtLink>
            </div>
          </template>
        </Accordion>
        <div class="mt-12 flex items-center justify-center">
          <CallToAction/>
        </div>
<!--        <div class="w-full flex items-center justify-center mt-10">
          <a href="tel:2085469221" class="social-hover phone">
            <IconPhone class="!w-[20px] !h-[20px]" fill="var(&#45;&#45;rew-primary-brown)"/>
          </a>
          <span class="rew-font rew-text-brown ms-3 text-xl">208-546-9221</span>
        </div>-->
      </div>
      <div class="menu-btm">
        <div class="flex items-center justify-center mb-3 mx-5 gap-6 overflow-hidden">
<!--          <a href="https://www.instagram.com/reworkflow/" target="_blank">
            <img src="/img/instagram-green.svg" alt="instagram">
          </a>-->
          <a href="https://www.linkedin.com/company/reworkflow/about/">
            <img src="/img/linkedin-green.svg" alt="linkedin">
          </a>
          <a href="mailto:solutions@reworkflow.com">
            <IconEmailFill fill="var(--rew-secondary-green)" height="31" width="31"/>
          </a>
        </div>
        <div>
          <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30" class="m-auto">
        </div>
      </div>
    </div>
  </Drawer>
  <Button icon="pi pi-bars text-2xl" text @click="visible = true" class="flex ml-auto lg:!hidden"
          style="color: var(--rew-primary-green) !important"/>
</template>

<script setup lang="ts">
const visible = ref(false)

const { isActiveSection, isAboutPage, hasActiveAboutSection } = useActiveSection()

// Check if a submenu item should be highlighted based on scroll position
function isAboutSubItemActive(route: string): boolean {
  return isActiveSection(route)
}

// Check if a menu item is an about hash route
function isAboutHashRoute(route: string): boolean {
  return route.startsWith('/about#')
}
</script>

<style scoped lang="scss">
.btn {
  &.btn-clear {
    border: none !important
  }
}

.indicator {
  background: #433129;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-grid;
  place-items: center;
  right: 110px;
  top: 28px;
  transition: all linear .3s;

  &.expanded {
    transform: rotate(-180deg)
  }
}

.menu-link {
  color: var(--rew-secondary-green);
  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  margin: 8px 0;
  text-transform: capitalize;
  cursor: pointer;
}

.menu-link.active,
.menu-link.router-link-active,
.menu-link .router-link-active {
  color: var(--rew-active-brown);
  position: relative;
}

.menu-link.active::after,
.menu-link.router-link-active::after,
.menu-link .router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -500px;
  right: -500px;
  height: 3px;
  background: var(--rew-active-brown)
}
</style>

<style lang="scss">
.p-drawer {
  background-color: var(--rew-baby-grey) !important;
  border: none !important;
}

.mobile-menu-drawer {
  * {
    font-size: 20px
  }

  .p-accordionpanel,
  .border-bottom-pannel {
    border-bottom: 1px solid var(--rew-primary-brown);
  }

  .p-accordionpanel {

    &:has(.router-link-active:not(.scroll-inactive):not(.about-parent-inactive)) {
      .p-accordionheader {
        color: var(--rew-primary-green) !important;
      }
    }

    // Scroll-based active parent
    &:has(.scroll-active) {
      .p-accordionheader {
        color: var(--rew-primary-green) !important;
      }
    }
  }

  .p-accordionheader {
    padding: 24px;
    font-weight: 700;
    color: var(--rew-primary-brown) !important;
    background-color: transparent !important;
    border-radius: 0;

    &.router-link-active:not(.about-parent-inactive) {
      color: var(--rew-primary-green);
    }

    .accordion-parent-link {
      color: inherit;
      text-decoration: none;

      &.router-link-active:not(.about-parent-inactive) {
        color: var(--rew-primary-green);
      }

      &.about-parent-active {
        color: var(--rew-primary-green) !important;
      }

      &.about-parent-inactive {
        color: inherit !important;
      }
    }
  }

  .p-accordionheader-toggle-icon {
    color: var(--rew-primary-brown);
  }

  .p-accordioncontent-content {
    background-color: transparent;

    a {
      color: var(--rew-primary-brown);
      padding-bottom: 16px;
      padding-left: 14px;

      &.router-link-active:not(.scroll-inactive) {
        color: var(--rew-primary-green);
        font-weight: 600;
      }

      // Scroll-based active state for About submenu
      &.scroll-active {
        color: var(--rew-primary-green) !important;
        font-weight: 600;
      }

      &.scroll-inactive {
        color: var(--rew-primary-brown) !important;
        font-weight: inherit;
      }
    }
  }

  .p-drawer-close-button {
    color: var(--rew-primary-brown) !important;
    width: max-content;
    background-color: transparent !important;

    &::before {
      content: 'CLOSE';
      margin-right: 12px;
      font-size: 14px;
    }
  }
}
</style>