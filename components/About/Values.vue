<template>
  <div class="values-section">
    <BasePageHeader>
      <h2 id="values-heading">Our Values to the Core</h2>
    </BasePageHeader>

    <div class="values-intro" data-aos="fade-up">
      <p class="values-intro-title">Stewardship in Practice</p>
      <p class="values-intro-body">
        Healthy Slate environments are supported through intentional strategy,
        disciplined execution, and responsible governance.
      </p>
    </div>

    <div class="values-list" data-aos="fade-up" data-aos-delay="100">
      <AboutValueItem
        v-for="(value, index) in values"
        :key="value.id"
        :id="value.id"
        :title="value.title"
        :expanded="expandedId === value.id"
        @toggle="handleToggle"
      >
        <template #icon>
          <component :is="value.icon" />
        </template>
        {{ value.content }}
      </AboutValueItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSeedling from '~/components/Icon/Seedling.vue'
import IconSparkle from '~/components/Icon/Sparkle.vue'
import IconUnlock from '~/components/Icon/Unlock.vue'
import IconCompass from '~/components/Icon/Compass.vue'
import IconBuilding from '~/components/Icon/Building.vue'

interface Value {
  id: string
  title: string
  icon: any
  content: string
}

const values: Value[] = [
  {
    id: 'grow',
    title: 'We Grow Together',
    icon: IconSeedling,
    content: 'Placeholder content for We Grow Together value. Replace with actual content.'
  },
  {
    id: 'service',
    title: 'We Deliver Inspiring Service',
    icon: IconSparkle,
    content: 'Placeholder content for We Deliver Inspiring Service value. Replace with actual content.'
  },
  {
    id: 'innovate',
    title: 'We Innovate in the Open',
    icon: IconUnlock,
    content: 'Placeholder content for We Innovate in the Open value. Replace with actual content.'
  },
  {
    id: 'strategy',
    title: 'We Develop Through Strategy',
    icon: IconCompass,
    content: 'Placeholder content for We Develop Through Strategy value. Replace with actual content.'
  },
  {
    id: 'responsible',
    title: 'We Build Responsibly',
    icon: IconBuilding,
    content: 'Placeholder content for We Build Responsibly value. Replace with actual content.'
  }
]

const expandedId = ref<string>('grow')

const handleToggle = (id: string) => {
  expandedId.value = expandedId.value === id ? '' : id
}
</script>

<style lang="scss" scoped>
.values-section {
  padding: 3rem 0;
}

.values-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.values-intro-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--rew-primary-brown);
  margin-bottom: 0.5rem;
}

.values-intro-body {
  font-size: 16px;
  color: var(--rew-secondary-green);
  line-height: 1.6;
}

.values-list {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 767px) {
  .values-section {
    padding: 2rem 0;
  }

  .values-intro-title {
    font-size: 18px;
  }

  .values-intro-body {
    font-size: 14px;
  }
}
</style>
