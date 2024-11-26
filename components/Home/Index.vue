<template>
  <section class="pt-3 pb-6 md:overflow-hidden overflow-visible" id="home">
    <div class="container-fluid">
      <div class="grid grid-cols-12 gap-3">
        <div class="lg:col-span-9 md:col-span-8 col-span-12">
          <div class="flex flex-col h-full justify-center relative">
            <img src="/img/logo-bg.svg" alt="rew"
                 class="bg-logo -left-[24px] !top-1/2 !transform !-translate-y-1/2 !opacity-5 invisible md:visible">

            <div data-aos="fade-right" data-aos-duration="700"
                 class="left-home-block position-relative mt-6 md:mt-12 relative">
              <h1 class="hero-title rew-text-green leading-tight">
                Slate Support and Staffing Solutions
                <span class="rew-text-brown">without the Difficulties of</span>
                <span class="rew-font ml-[5px] md:ml-[10px] lg:ml-[15px]">Re</span>
                <span class="rew-text-brown">Hiring</span>
              </h1>
            </div>

            <div data-aos="fade-right" data-aos-duration="700"
                 class="left-home-block flex items-center lg:mt-10 md:mt-6 mt-2">
              <div class="rew-text-brown text-[18px] md:text-[20px] lg:text-[28px]">
                We offer flexibly structured services that fit seamlessly with your institution’s needs. Our lean team
                of experts provides quick, high-quality results for all Slate issues and implementation projects.
              </div>
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
    </div>
  </section>
</template>

<script setup>

</script>