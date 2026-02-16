<template>
  <div class="value-item" :class="{ 'is-expanded': isExpanded }">
    <button
      class="value-header"
      :aria-expanded="isExpanded"
      :aria-controls="`value-content-${id}`"
      @click="toggle"
    >
      <div class="value-header-left">
        <span class="value-icon">
          <slot name="icon" />
        </span>
        <h3 class="value-title">{{ title }}</h3>
      </div>
      <span class="value-toggle">
        {{ isExpanded ? '×' : '+' }}
      </span>
    </button>
    <div
      :id="`value-content-${id}`"
      class="value-content"
      :class="{ 'is-visible': isExpanded }"
    >
      <div class="value-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  expanded?: boolean
}>()

const emit = defineEmits<{
  toggle: [id: string]
}>()

const isExpanded = computed(() => props.expanded)

const toggle = () => {
  emit('toggle', props.id)
}
</script>

<style lang="scss" scoped>
.value-item {
  background: white;
  border: 1px solid var(--rew-baby-grey);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  &.is-expanded {
    border-color: var(--rew-primary-green);
  }
}

.value-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  &:focus-visible {
    outline: 2px solid var(--rew-primary-green);
    outline-offset: -2px;
  }
}

.value-header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--rew-primary-green);

  :deep(svg) {
    width: 24px;
    height: 24px;
    fill: var(--rew-primary-green);
  }
}

.value-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--rew-primary-brown);
  margin: 0;
}

.value-toggle {
  font-size: 24px;
  font-weight: 300;
  color: var(--rew-primary-green);
  line-height: 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.is-visible {
    max-height: 500px;
  }
}

.value-body {
  padding: 0 1.5rem 1.5rem 4rem;
  color: var(--rew-primary-brown);
  font-size: 16px;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .value-header {
    padding: 1rem;
  }

  .value-title {
    font-size: 16px;
  }

  .value-body {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
