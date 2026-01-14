<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="container-fluid flex items-center bg-transparent">
      <NuxtLink class="navbar-brand py-1.5" to="/">
        <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
      </NuxtLink>

      <Menubar class="!hidden" />

      <MobileMenu />

      <div class="p-menubar p-component ms-auto rew-header !bg-transparent !border-none !hidden lg:!flex"
        data-pc-name="menubar" data-pc-section="root">
        <ul class="p-menubar-root-list" data-pc-section="rootlist" role="menubar" tabindex="0">
          <li v-for="item in NAVIGATION_MENU" :key="item.label" class="p-menubar-item" role="menuitem"
            aria-label="Services" aria-expanded="false" aria-haspopup="menu" aria-level="1" aria-setsize="5"
            aria-posinset="1" data-pc-section="item" data-p-active="false" data-p-focused="false">
            <template v-if="item.items">
              <div class="p-menubar-item-content" data-pc-section="itemcontent">
                <a target="_blank" class="p-menubar-item-link" tabindex="-1" aria-hidden="true"
                  data-pc-section="itemlink">
                  <span class="ml-2">{{ item.label }}</span>
                  <span class="pi pi-fw pi-angle-down ml-2"></span>
                </a>
              </div>
              <ul class="p-menubar-submenu" data-pc-section="submenu" role="menu">
                <li v-for="sub in item.items" :key="sub.label" class="p-menubar-item" role="menuitem" aria-label="State"
                  aria-level="2" aria-setsize="2" aria-posinset="1" data-pc-section="item" data-p-active="false"
                  data-p-focused="false">
                  <div class="p-menubar-item-content" data-pc-section="itemcontent">
                    <NuxtLink :to="sub.route" :target="sub.external ? '_blank' : '_self'" class="p-menubar-item-link new-tab-hover">
                      {{ sub.label }} <IconExternal v-if="sub.external" />
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </template>

            <template v-else>
              <div class="p-menubar-item-content" data-pc-section="itemcontent">
                <NuxtLink :to="item.route" :target="item.external ? '_blank' : '_self'" class="p-menubar-item-link new-tab-hover">
                  {{ item.label }} <IconExternal v-if="item.external" />
                </NuxtLink>
              </div>
            </template>
          </li>

          <li class="ms-3">
            <CallToAction label="Contact" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
header {
  background: rgba(240, 243, 239, 0.6);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);

  nav {
    min-height: 109px;
  }
}

.rew-header {
  --p-menubar-submenu-background: #f4f7f3;
  --p-menubar-item-focus-background: var(--rew-baby-grey);
  --p-menubar-item-focus-color: var(--rew-primary-brown);
  --p-menubar-item-active-background: transparent;
  --p-menubar-item-active-color: var(--rew-primary-brown);
  --p-menubar-item-color: var(--rew-primary-brown);

  .p-menubar-item:has(.router-link-active)>.p-menubar-item-content {
    color: var(--rew-active-brown) !important;
  }

  .router-link-active {
    &:not(.rew-main-btn) {
      color: var(--rew-active-brown);
    }
  }

  .p-menubar-submenu {
    @apply rounded-xl p-2 mt-1;

    .p-menubar-item {
      .p-menubar-item-content {
        @apply rounded-lg;
      }
    }
  }

  .p-menubar-item {
    font-weight: 700;

    .p-menubar-item-content {
      @apply rounded-xl;

      .p-menubar-item-link {
        gap: 0;
      }
    }

    &:hover {
      .p-menubar-submenu {
        display: flex !important;
      }
    }
  }

  .p-menubar-button {
    --p-icon-size: 24px;
    color: var(--rew-primary-green) !important;
  }

  &.p-menubar-mobile-active {
    .p-menubar-root-list {
      left: unset;
      right: 0;
      width: 208px;
      border-radius: 4px;
      padding: 4px;

      .p-menubar-item-content {
        span {
          margin-left: 0 !important;
        }
      }

      .p-menubar-submenu {
        .p-menubar-item-content {
          .p-menubar-item-link {
            margin-left: 6px;
          }

          span {
            margin-left: 0px !important;
          }
        }
      }
    }
  }
}
</style>