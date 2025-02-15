<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        Dynamic Forms
      </template>

      <template #subtitle>
        Dynamics Forms from Next Gen Web Solutions is a terrific, affordable product ideal for filling gaps between
        Slate and your Student Information System (SIS). <span class="rew-text-green rew-font">Re</span><span
          class="rew-text-brown rew-font">Workflow</span> is not affiliated with Next Gen, but we are fans!
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section class="text-xl rew-text-brown">
        Dynamic Forms allows non-technical users to build interactive, multi-page forms and processing workflows.
        Its strength lies in its extremely flexible API connectors, which integrate with nearly any database
        (think SIS), REST API's, and specific products like Google Sheets. It also supports mixed
        authentication, allowing both external and internal users to submit forms.
      </section>

      <section>
        <div class="mb-3 text-2xl md:text-3xl font-semibold rew-text-brown">
          Real Use Cases
        </div>

        <ul class="text-[20px] list-inside list-checkmark space-y-2 rew-text-brown">
          <li>Auto-generated adjunct contracts with class schedules and pay rates pulled from the SIS in real time</li>

          <li>Scholarship application that pulls balances and other financial information from the SIS in real time</li>

          <li>New employee onboarding with HR paperwork, IT permissions and asset requests, physical facilities
            requests, etc. all in one workflow
          </li>

          <li>During the pandemic: rapidly-protyped forms for managing health status and campus visits, integrated
            directly with Slate, SIS, and campus access control system
          </li>

          <li>Forms-as-web-apps: Supplement your SIS's web interface and interact directly with the database layer. This
            is probably not an officially-sanctioned use case, but we can tell you that it works!
          </li>
        </ul>
      </section>

      <section>
        <ul class="flex flex-wrap gap-x-8 gap-y-3 md:gap-y-0 w-full justify-center text-xl font-semibold rew-text-brown text-center">
          Contact us today if you'd like assistance taking your Dynamic Forms to the next level.
        </ul>

        <div class="flex justify-center mt-8">
          <div class="border rounded-full shadow !bg-white/30 !backdrop-blur-sm hover:!shadow-md transition-all">
            <RouterLink
                class="text-3xl font-semibold text-gradient-animation block px-6 py-2"
                to="/pricing">
              Pricing
            </RouterLink>
          </div>
        </div>
      </section>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'ReWorkflow - Dynamic Forms',
})
</script>