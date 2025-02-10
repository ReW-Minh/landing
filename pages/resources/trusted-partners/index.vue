<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        Our Trusted Partners
      </template>

      <template #subtitle>
        While we geek out in Slate, these higher ed experts have you covered for the rest.
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section class="text-xl rew-text-brown">
        <span class="rew-font"><span class="rew-text-green">Re</span>Workflow</span> stays lean, affordable, and
        innovative because we do not try to be everything to everyone. Meanwhile,
        colleges and universities often ask us for assistance with areas that extend beyond our Slater focus. That’s
        where our Trusted Partners come in. Each has been vetted through firsthand project collaborations or strong
        endorsements from respected higher ed leaders. Click “Learn More” to connect with them directly.
      </section>

      <section>
        <div class="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-10">
          <div v-for="(item, index) in partners"
               class="border rounded-xl bg-white/30 backdrop-blur-sm shadow h-unset md:h-[310px] col-span-6" :class="{
                  'md:col-span-2': index < 3,
                  'md:col-span-3': index >= 3
               }">
            <div class="card !m-0 !p-6 text-center h-full flex flex-col items-center justify-between gap-6 md:gap-0">
              <div class="h-[85px] grid place-items-center">
                <img :src="item.logo" :alt="item.content" class="mx-auto w-[200px]">
              </div>

              <div>{{ item.content }}</div>

              <a :href="item.url" target="_blank" title="Learn more"
                 class="rew-main-btn rew-box-shadow inline-flex items-center h-10 !text-base">
                <span>Learn more</span>
                <span class="md:ml-3 ml-1">
                  <IconDoubleArrow/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mb-3 text-3xl text-center font-semibold rew-text-brown">
          Interested in becoming a Trusted Partner? Let's connect!
        </div>

        <div class="border rounded-xl p-4 shadow bg-white/30 backdrop-blur-sm mt-1 md:mt-5" id="formPartnerDestination">

        </div>
      </section>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup>
useHead({
  title: 'ReWorkflow - Trusted Partners',
})

const partners = [
  {
    logo: 'https://lirp.cdn-website.com/028e158a/dms3rep/multi/opt/Get-FA-Solutions-Logo-1920w.png',
    content: 'Financial Aid Consulting, Processing, Staffing',
    url: 'https://www.getfasolutions.com/'
  },
  {
    logo: 'https://static.wixstatic.com/media/7cb5bc_9f00498cca45490c9a1f6697f2074d8b~mv2.png',
    content: 'Interim Leadership, Executive Coaching, Strategic Consulting',
    url: 'https://www.jmpartnersolutions.com/'
  },
  // {
  //   logo: '/img/kanahoma.svg',
  //   content: 'Branding/Creative, Market Research, Performance Marketing',
  //   url: 'https://kanahoma.com/'
  // },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/665c86cf630c061cb7714cde/adde83da-5235-4241-8a18-64c91448b157/Koehler_Primary_BLK.png?format=1500w',
    content: 'Enrollment Management/Student Retention, Staff Development, Strategic Assessment',
    url: 'https://www.koehlerconsulting.net/'
  },
  {
    logo: 'https://static.wixstatic.com/media/2ec864_53fb50adcc744839a4df258a8a155724~mv2.png/v1/fill/w_291,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20Copy%20of%20Logos_edited_edited.png',
    content: 'Workday, ERP Planning Support, Strategic Operations Consulting',
    url: 'https://www.legatostrategic.com/'
  },
  {
    logo: 'https://mlz9wgnyiyme.i.optimole.com/cb:iQxL.114c1/w:800/h:184/q:mauto/f:best/https://solidan.net/wp-content/uploads/2023/04/logo-solidan-alt.png',
    content: 'Custom App Development, PeopleSoft, Slate',
    url: 'https://solidan.net/'
  },
]

onMounted(() => {
  const newParent = document.getElementById('formPartnerDestination')
  const oldParent = document.getElementById('formPartnerLoad')

  newParent.append(...oldParent.childNodes)
})

onBeforeUnmount(() => {
  const newParent = document.getElementById('formPartnerDestination')
  const oldParent = document.getElementById('formPartnerLoad')

  oldParent.append(...newParent.childNodes)
})
</script>