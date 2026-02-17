<template>
  <div class="values-section">
    <BasePageHeader>
      <h2 id="values-heading"><span class="rew-text-green">Our Values</span> to the Core</h2>
    </BasePageHeader>

    <div class="values-intro" data-aos="fade-up">
      <p class="values-intro-title">Stewardship in Practice</p>
      <p class="values-intro-body">
        Healthy Slate environments are supported through intentional strategy,
        disciplined execution, and responsible governance. These principles shape how we partner with education
        institutions to make disciplined decisions and build resilient solutions.
      </p>
    </div>

    <div class="values-accordion" data-aos="fade-up" data-aos-delay="100">
      <div class="mx-2 lg:mx-0">
        <Accordion :value="expandedValues">
          <AccordionPanel
              v-for="value in values"
              :key="value.id"
              :value="value.id"
          >
            <AccordionHeader>
            <span class="value-icon">
              <img :src="value.icon" :alt="value.title">
            </span>
              <span class="value-title">{{ value.title }}</span>
            </AccordionHeader>
            <AccordionContent>
              <p class="value-body">{{ value.content }}</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Value {
  id: string
  title: string
  icon: any
  iconBg: string
  content: string
}

const values: Value[] = [
  {
    id: 'grow',
    title: 'We Grow Together',
    icon: `/img/values/seed.png`,
    iconBg: 'var(--rew-primary-green)',
    content: `We approach every engagement as teaching and learning in action. Expanding your Slate team’s knowledge base and advancing our collective professional development alongside the Slate community.`
  },
  {
    id: 'service',
    title: 'We Deliver Inspiring Service',
    icon: `/img/values/bell.png`,
    iconBg: 'var(--rew-primary-green)',
    content: 'We treat every request and project as an opportunity to light a spark. Providing solutions with clarity that create lightbulb moments, build confidence, and reveal new possibilities.'
  },
  {
    id: 'innovate',
    title: 'We Innovate in the Open',
    icon: `/img/values/book.png`,
    iconBg: 'var(--rew-primary-green)',
    content: 'We commit to transparency at every step, from pricing to processes to lessons learned. Accessible information enables sounder decisions, empowers effective collaboration, and leads to shared success.'
  },
  {
    id: 'strategy',
    title: 'We Develop Through Strategy',
    icon: `/img/values/compass.png`,
    iconBg: 'var(--rew-primary-green)',
    content: 'We approach every engagement with a clear strategic framework. Insights emerge through open dialogue, careful listening, and trust built over time. This shared understanding enables education institutions to move ahead with clarity and confidence, creating solutions aligned with their goals and long-term success.'
  },
  {
    id: 'responsible',
    title: 'We Build Responsibly',
    icon: `/img/values/recycle.png`,
    iconBg: 'var(--rew-primary-green)',
    content: 'We focus on sustainable solutions not only for our ducation institution partners, but also in how we operate as a team and as a company. Prioritizing practices that improve efficiency, reduce waste, and keep both local and global impact in mind.'
  }
]

const expandedValues = ref<string>('grow')
</script>

<style lang="scss" scoped>
.values-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.values-bg-shape {
  position: absolute;
  left: -15%;
  top: 50%;
  transform: translateY(-50%);
  width: 45%;
  max-width: 500px;
  opacity: 0.04;
  pointer-events: none;

  img {
    width: 100%;
    height: auto;
  }
}

.values-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  position: relative;
  z-index: 1;
}

.values-intro-title {
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--rew-primary-brown);
  margin-bottom: 0.75rem;
}

.values-intro-body {
  font-size: 20px;
  color: var(--rew-secondary-green);
  line-height: 1.7;
}

.values-accordion {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (max-width: 767px) {
  .values-section {
    padding: 3rem 0;
  }

  .values-bg-shape {
    width: 60%;
    left: -25%;
    opacity: 0.03;
  }

  .values-intro {
    margin-bottom: 2rem;
  }

  .values-intro-title {
    font-size: 18px;
  }

  .values-intro-body {
    font-size: 14px;
  }
}
</style>

<style lang="scss">
.values-accordion {
  .p-accordion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .p-accordionpanel {
    border-radius: 16px;
    border: 2px solid var(--rew-baby-grey);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--rew-secondary-green);
    }

    &[data-p-active="true"] {
      border-color: var(--rew-primary-green);
      box-shadow: 0 4px 20px rgba(78, 108, 60, 0.15);
    }
  }

  .p-accordionheader {
    padding: 1.25rem 1.5rem;
    background: transparent !important;
    border: none;
    gap: 1rem;
    display: flex;
    align-items: center;
    color: var(--rew-primary-brown) !important;

    &:hover {
      background: rgba(78, 108, 60, 0.03) !important;
      color: var(--rew-primary-brown) !important;
    }
  }

  .p-accordionpanel[data-p-active="true"] .p-accordionheader {
    background: transparent !important;
    color: var(--rew-primary-brown) !important;
  }

  .p-accordionheader-toggle-icon {
    color: var(--rew-primary-green);
    width: 24px;
    height: 24px;
    order: 1;
  }

  .value-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;

    img {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
  }

  .value-title {
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--rew-primary-brown) !important;
    flex: 1;
    transition: color 0.3s ease;
  }

  .p-accordioncontent-content {
    padding: 0 1.5rem 1.5rem 1.5rem;
    background: transparent;
    border: none;
  }

  .value-body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: var(--rew-primary-brown);
    line-height: 1.7;
    margin: 0;
    padding-left: 60px;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    .p-accordionheader {
      padding: 1rem;
    }

    .value-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .value-title {
      font-size: 16px;
    }

    .p-accordioncontent-content {
      padding: 0 1rem 1rem 1rem;
    }

    .value-body {
      padding-left: 0;
      font-size: 14px;
    }
  }
}
</style>
