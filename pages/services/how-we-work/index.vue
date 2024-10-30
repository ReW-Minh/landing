<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]">

    <BasePageHeader>
      <template #default>
        <div class="rew-text-green -mb-4">How We Work</div>
        <div>Let's Keep It Simple</div>
      </template>

      <template #subtitle>
        Engaging with ReWorkflow is seamless. As your trusted <span class="rew-text-brown">Slaters</span> service
        provider, we ensure that the value you experience grows with every step.
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="border rounded-xl p-4 shadow bg-white/50 backdrop-blur-sm" v-for="(item, index) in steps">
          <div class="btn-connect mb-4 !rounded-full">
            <IconSearch v-if="item.icon === 'search'" />
            <IconPartner v-if="item.icon === 'partner'" />
            <IconOnboard v-if="item.icon === 'onboard'" />
            <IconSprout v-if="item.icon === 'sprout'" />
          </div>
          <div class="text-2xl font-bold rew-text-brown mb-2">
            <span class="pe-2 rew-text-green">0{{ index + 1 }}</span>{{ item.title }}
          </div>
          <div class="rew-text-brown text-lg" v-html="item.content"></div>
        </div>
      </section>

      <section class="border rounded-xl p-4 shadow bg-white/50 backdrop-blur-sm">
        <div class="mb-3 text-4xl font-semibold rew-text-brown text-center">
          The <span class="rew-font"><span class="rew-text-green">Re</span>W</span> Difference
        </div>

        <ul class="text-lg space-y-4 list-inside list-checkmark">
          <li v-for="item in differences">
            <div>
              <span class="font-semibold rew-text-green pe-2">{{ item.title }}:</span>
              <span v-html="item.content"></span>
            </div>
          </li>
        </ul>
      </section>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="jsx">
useHead({
  title: 'ReWorkflow - How We Work',
})

definePageMeta({
  middleware: ['hidden']
})

const steps = [
  {
    icon: 'search',
    title: `Discovery`,
    content: `Schedule a free call to deep dive into your Slate team’s operations, processes, and technical support needs to determine the right fit.`
  },
  {
    icon: 'partner',
    title: `Partnership`,
    content: `You’ll receive a service package quote and agreement to review while we get ready to become best friends with your procurement office.`
  },
  {
    icon: 'onboard',
    title: `Onboarding`,
    content: `We’ll get right to work with your client profile, dashboard launch, dedicated <span class="rew-font"><span class="rew-text-green">Re</span>W</span> Slate Support team kickoff meeting, systems diagnostics, and submitting your first tickets/project requests.`
  },
  {
    icon: 'sprout',
    title: `Nurturing`,
    content: `Your <span class="rew-font"><span class="rew-text-green">Re</span>W</span> Client Success Manager will provide regular quality assurance check-ins for your ongoing Slate Support and service usage data updates for your budget planning.`
  }
]

const differences = [
  {
    title: `Rapid Onboarding`,
    content: `Get started in days, not months, with straightforward scope of work agreements and time-tested operational efficiencies.`,
  },
  {
    title: `Unrestricted Support`,
    content: `Farwell to “out of scope” barriers with no limits to your number of tickets, projects, meetings, audits/diagnostics, and help desk seats.`,
  },
  {
    title: `Transparency`,
    content: `Client dashboards give direct visibility into our project management software and time tracking.`,
  },
  {
    title: `No Long-Term Commitments Required`,
    content: `You can redirect our efforts at your convenience to meet emerging needs. Options to downgrade, upgrade, and cancel services at any time.`,
  },
  {
    title: `Great Oaks from Little Acorns Grow`,
    content: `<span class="rew-font"><span class="rew-text-green">Re</span>W</span> is a lean collaborative of Slaters from diverse higher education backgrounds who hold the shared belief that no Slate team is too small to make a mighty impact.`,
  },
  {
    title: `Into the SIS Weeds`,
    content: `We have extensive experience administering student information systems. We thrive on challenges to optimize Slate with data integrations and business processes.`,
  },
]
</script>

