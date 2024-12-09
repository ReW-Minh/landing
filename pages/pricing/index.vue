<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <template #default>
        Pricing
      </template>
    </BasePageHeader>

    <BasePageContent>
      <section>
        <div class="mb-3 text-2xl md:text-3xl font-semibold rew-text-brown">
          Flexible, Cost-Effective Options
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <BaseCardItem :hoverEffect="false" class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-2xl space-y-2">
                    <div>
                      Pay As You Go
                    </div>
                    <div class="font-bold rew-text-green text-2xl">
                      $295<span class="rew-text-brown">/hour</span>
                    </div>
                    <div class="p-card-subtitle italic text-[18px] leading-6 font-normal">
                      Post-pay monthly only for what you need.
                    </div>
                  </div>
                </div>
              </template>
            </BaseCardItem>
          </div>

          <div>
            <BaseCardItem :hoverEffect="false" class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-2xl space-y-2">
                    <div>
                      Prepay & Save
                    </div>
                    <div class="font-bold rew-text-green text-2xl">
                      <div>
                        20 hrs: <span class="rew-text-brown">$265/hour</span>
                      </div>
                      <div>
                        40 hrs: <span class="rew-text-brown">$235/hour</span>
                      </div>
                    </div>
                    <div class="p-card-subtitle italic text-[18px] leading-6 font-normal">
                      Discounts for purchasing blocks of time in advance.
                    </div>
                  </div>
                </div>
              </template>
            </BaseCardItem>
          </div>

          <div>
            <BaseCardItem :hoverEffect="false" class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-2xl space-y-2">
                    <div>
                      Custom Solutions
                    </div>

                    <div class="p-card-subtitle italic text-[18px] leading-6 font-normal">
                      <RouterLink to="/contact" class="underline font-bold">Contact us</RouterLink> for a tailored quote
                    </div>
                  </div>
                </div>
              </template>
            </BaseCardItem>
          </div>
        </div>
      </section>

      <section>
        <div class="mb-3 text-2xl md:text-3xl font-semibold rew-text-brown">
          Recently Delivered Slate Support Examples
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in examples" :key="item.price">
            <BaseCardItem :hoverEffect="false" class="resource-card !cursor-default !bg-white/30 !backdrop-blur-sm">
              <template #image>
                <div class="flex items-center m-6 h-full">
                  <div class="font-bold rew-text-brown text-xl space-y-2">
                    <div>
                      {{ item.title }} <span class="font-normal">{{ item.content }}</span>
                    </div>
                    <div class="font-bold rew-text-green text-xl">
                      ${{ item.price }}
                    </div>
                  </div>
                </div>
              </template>
            </BaseCardItem>
          </div>
        </div>
      </section>

      <section>
        <div class="mb-3 text-2xl md:text-3xl font-semibold rew-text-brown">
          How We Work
        </div>

        <ul class="text-[20px] list-inside list-checkmark space-y-2 rew-text-brown">
          <li>
            <div>
              <strong>Strategic-Minded Technicians:</strong> Partner with us to set priorities and scopes of work that meet your institutional goals.
            </div>
          </li>

          <li>
            <div>
              <strong>Unrestricted Support:</strong> Enjoy unlimited tickets and flexibly scheduled team meetings for boundless collaborations and professional development.
            </div>
          </li>

          <li>
            <div>
              <strong>Lifetime Availability:</strong> Pre-purchase discounted hours that never expire, giving you ultimate control over your service plan.
            </div>
          </li>

          <li>
            <div>
              <strong>Precise, Transparent Billing:</strong> Benefit from second-by-second time tracking to ensure you only pay for what you use with no rounding.
            </div>
          </li>

          <li>
            <div>
              <strong>Stay Informed:</strong> Access our Admin Dashboards for detailed updates on package usage, task progress, and project management.
            </div>
          </li>
        </ul>
      </section>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup>
const examples = [
  {
    title: 'Student Success Portal:',
    content: 'Student requests help, staff match with qualified student tutors',
    price: '15,930'
  },
  {
    title: 'Undergraduate Housing Workflow:',
    content: 'Staff match compatible roommates and notify students',
    price: '14,340'
  },
  {
    title: 'Slate-Banner Financial Aid Integration:',
    content: 'Show CFP-compliant aid letter in Slate and notify students of changes',
    price: '9,900'
  },
  {
    title: 'Six months of Slate Support with new Slate Captain onboarding and training',
    price: '55,042'
  },
  {
    title: 'Slate security permissions express audit and training',
    price: '2,000'
  },
  {
    title: 'Slate admissions application express implementation',
    price: '14,478'
  }
]
</script>

<style scoped lang="scss">
:deep() {
  .h-\[280px\] {
    height: 210px !important;
    overflow: visible !important;
  }

  .p-card-body {
    padding: 4px !important;
  }

  @media (max-width: 767px) {
    .h-\[280px\] {
      height: 190px !important;
    }
  }
}
</style>