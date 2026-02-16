<template>
  <section class="pt-4 md:pb-10 pb-6 overflow-hidden" id="service">
    <div class="max-w-[960px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div v-for="item in slaterRoles" class="border rounded-2xl bg-white/30 backdrop-blur-sm shadow">
          <div class="card !m-6">
            <div class="card-title nowrap !text-left" v-html="item.title"></div>
            <div class="card-content !text-left" v-html="decorateText(item.content)"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const slaterRoles = [
  {
    title: 'Captaining',
    content: `
      <ul class="list-checkmark">
        <li>Staff Mentoring</li>
        <li>Admissions Cycle Prep</li>
        <li>Project Management</li>
        <li>Strategic Advisement</li>
      </ul>
    `
  },
  {
    title: 'Engineering',
    content: `
      <ul class="list-checkmark">
        <li>Build Incredible Things</li>
        <li>Portals</li>
        <li>Integrations</li>
        <li>Custom Datasets</li>
      </ul>
    `
  },
  {
    title: 'Operationalizing',
    content: `
      <ul class="list-checkmark">
        <li>Day-to-Day Support</li>
        <li>Querying and Reporting</li>
        <li>Workflow Automations</li>
        <li>Diagnostic Checkups</li>
      </ul>
    `
  },
  {
    title: 'Reinforcing',
    content: `
      <ul class="list-checkmark">
        <li>Staff Gap Fills</li>
        <li>Application Reading</li>
        <li>Fraud Detection</li>
        <li>Training and Documentation</li>
      </ul>
    `
  },
]

const decorateText = str => {
  if (!str)
    return

  return str.replaceAll(/ReW/g, `<span class="rew-font"><span class="rew-text-green">Re</span>W</span>`)
}
</script>