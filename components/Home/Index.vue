<script setup lang="ts">
import SlateSchoolLogos from '~/components/Home/SlateSchoolLogos.vue'
</script>

<template>
  <section class="pt-5 md:pt-8 pb-6 overflow-x-visible overflow-y-visible" id="home">
    <div class="container-fluid">
      <img
          src="/img/logo-bg.svg"
          alt="rew"
          class="bg-logo !left-1/2 !-translate-x-1/2 !top-[220px] !h-[750px] !opacity-[0.07] invisible md:visible"
      >

      <div class="grid grid-cols-12 gap-3">
        <div class="lg:col-span-9 md:col-span-8 col-span-12">
          <div class="flex flex-col h-full justify-center relative">
            <div
                data-aos="fade-right"
                data-aos-duration="700"
                class="left-home-block position-relative mt-6 md:mt-0 relative flex items-center gap-8"
            >
              <div class="w-[80px] lg:w-[120px] flex-shrink-0 ">
                <img
                    src="https://reworkflow.com/static/slate_gold.png"
                    alt="Slate Gold Partner"
                    class="w-full h-auto object-contain"
                >
              </div>
              <h1 class="hero-title rew-text-green leading-tight">
                Slate Support and Staffing Solutions
              </h1>
            </div>

            <div data-aos="fade-right" data-aos-duration="700"
                 class="left-home-block flex items-center lg:mt-10 md:mt-6 mt-2">
              <div class="rew-text-brown text-[18px] md:text-[20px] lg:text-[28px]">
                We offer flexibly structured services that fit seamlessly with your institution’s needs. Whether it’s
                ongoing help desk services or major implementations, our team of Slate experts delivers fast,
                high-quality, and cost-effective results.
              </div>
            </div>

            <div class=" mt-4 md:mt-6 lg:mt-10">
              <CallToAction label="Slate Services" link="/services" size="lg" :internal="true"/>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 md:col-span-4 invisible md:visible items-center justify-end" data-aos="zoom-in"
             data-aos-duration="700">
          <img class="img-fluid" src="/img/hero-img-lg.webp" alt="rew main board">
        </div>

        <img class="absolute h-[calc(100dvh-360px)] md:hidden left-1/2 -translate-x-1/2 -z-10 opacity-20"
             src="/img/hero-img-lg.webp" alt="rew main board">
      </div>

      <SlateSchoolLogos/>
    </div>
  </section>
</template>