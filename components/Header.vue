<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="container-fluid flex items-center bg-transparent">
      <NuxtLink class="navbar-brand py-1.5" to="/">
        <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
      </NuxtLink>

      <Menubar :model="items" class="ms-auto rew-header bg-transparent">
        <template #item="{ item, props, hasSubmenu }">
          <NuxtLink v-if="item.route" :to="item.route" class="p-menubar-item-link">
            {{ item.label }}
          </NuxtLink>

          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action" target="_blank">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
          </a>
        </template>
      </Menubar>
    </nav>
  </header>
</template>

<script setup>
const items = ref([
  {
    label: 'Services',
    items: [
      {
        label: 'State',
        route: '/services/slate'
      },
      {
        label: 'PowerCampus',
        route: '/services/powercampus'
      }
    ]
  },
  {
    label: 'ReSource',
    items: [
      {
        label: 'Slate',
        url: 'https://resource.reworkflow.com/books/slate'
      },
      {
        label: 'PowerCampus',
        url: 'https://resource.reworkflow.com/books/powercampus'
      }
    ]
  },
  {
    label: 'Podcast',
    route: '/podcast'
  },
  {
    label: 'About',
    items: [
      {
        label: 'Our Team',
        route: '/about/team'
      },
      {
        label: 'Careers',
        route: '/about/careers'
      }
    ]
  },
  {
    label: 'Contact',
    route: '/contact'
  },
])
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
    color: var(--rew-active-brown);
  }

  .p-menubar-submenu {
    padding: 4px;
  }

  .p-menubar-item {
    font-weight: 700;

    .p-menubar-item-content {
      .p-menubar-item-link {
        gap: 0;
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