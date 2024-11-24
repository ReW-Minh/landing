<template>
  <section class="pt-4 md:pb-10 pb-6 overflow-hidden" id="service">
    <div class="max-w-[960px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div v-for="item in slaterRoles" class="border rounded-xl bg-white/30 backdrop-blur-sm shadow">
          <div class="card !my-6 !mx-4">
            <div class="card-title nowrap" v-html="item.title"></div>
            <div class="card-content" v-html="decorateText(item.content)"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const slaterRoles = ref([
  {
    title: 'Captaining',
    content: 'Team up with our Slate subject matter experts for embedded project management, cycle prep, and strategic advisement.'
  },
  {
    title: 'Engineering',
    content: 'Let’s achieve big together with next-level Slate enhancements – from portals and dashboards to workflow automations and system integrations.'
  },
  {
    title: 'Operationalizing',
    content: 'Troubleshooting, routine maintenance, querying, reporting, data integrity – you name it! ReW’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities.'
  },
  {
    title: 'Reinforcing',
    content: 'Looking for Slate-skilled, seasonal application readers or processors? Coverage for a key Slater going on leave? Need to train up your in-house talent? Call on ReW to bridge the gap.'
  },
])

const decorateText = str => {
  if (!str)
    return

  return str.replaceAll(/ReW/g, `<span class="rew-font"><span class="rew-text-green">Re</span>W</span>`)
}
</script>