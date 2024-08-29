<template>
    <section class="pt-3 pb-6 overflow-hidden" id="home">
        <div class="container-fluid">
            <div class="grid grid-cols-12 gap-1">
                <div class="lg:col-span-9 md:col-span-8 col-span-9">
                    <div class="flex flex-col h-full">
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100"
                            class="left-home-block position-relative mt-6 md:mt-12 relative">
                            <h1 class="hero-title rew-text-green leading-tight">
                                Slate Support and Staffing Solutions
                                <span class="rew-text-brown">without the Difficulties of</span>
                                <span class="rew-font ml-2">Re</span>
                                <span class="rew-text-brown">Hiring</span>
                            </h1>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200"
                            class="left-home-block flex items-center mt-2 md:mt-6">
                            <span class="small-image rew-box-shadow rew-bg-gradient hidden lg:block">
                                <img src="/img/hero-img-sm.webp" alt="rew small mainboard" class="img-fluid">
                            </span>
                            <div class="rew-text-brown text-[14px] md:text-[18px] lg:text-[24px] ml-0 lg:ml-6">
                                We team up with higher education institutions to cultivate evergreen enrollment systems, operations, and processes.
                            </div>
                        </div>
                        <div class="mt-4 md:mt-8">
                            <button @click="visible = true" title="Contact Us"
                                class="rew-main-btn rew-box-shadow flex items-center">
                                <span>Let's Get Started</span>
                                <span class="md:ml-3 ml-1 flex">
                                    <svg class="button-arrow" width="34" height="28" viewBox="0 0 34 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.16671 27.75L0.958374 24.5417L11.4427 14L0.958374 3.45833L4.16671 0.25L17.9167 14L4.16671 27.75ZM19.2917 27.75L16.0834 24.5417L26.5677 14L16.0834 3.45833L19.2917 0.25L33.0417 14L19.2917 27.75Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <!-- <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" data-aos-offset="-500"
                            class="left-home-block my-auto">
                            <div class="grid grid-cols-12">
                                <div class="col-span-12 lg:col-span-6">
                                    <a target="_blank"
                                        href="https://technolutions.com/community/slate-preferred-partners"
                                        class="clickable flex items-center h-full">
                                        <span class="flex items-center justify-center max-width-sm">
                                            <img src="/img/slate-logo.webp" alt="slate"
                                                class="slate-partner-logo pl-0 lg:pl-2">
                                        </span>
                                        <span
                                            class="ml-1  md:ml-4 fs-36 fs-sm-10 fs-md-26 font-bold capitalize rew-text-brown">
                                            <span class="rew-text-green">
                                                Slate
                                            </span>
                                            Preferred <br> Partner
                                        </span>
                                        <span class="more-info hidden lg:block">More info</span>
                                    </a>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <a target="_blank" :href="RESOURCE_LINK" class="clickable flex items-center h-full">
                                        <span class="flex items-center justify-center max-width-sm">
                                            <img src="/img/brainstorm.svg" alt="brainstorm" class="pl-0 lg:pl-2">
                                        </span>
                                        <span
                                            class="ml-1  md:ml-4 fs-36 fs-sm-10 fs-md-26 font-bold capitalize rew-text-brown">
                                            <span style="white-space: nowrap;">
                                                <span class="rew-text-green ms-sm-n2 rew-font"
                                                    style="margin-right: -7px">
                                                    Re
                                                </span>
                                                <span style="text-transform: none !important;">
                                                    Source:
                                                </span>
                                            </span>
                                            <br> A Slaters <br class="hidden lg:block"> Wiki
                                        </span>
                                        <span class="more-info hidden lg:block">More info</span>
                                    </a>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-4 col-span-3 flex items-center justify-end" data-aos="zoom-in"
                    data-aos-duration="700">
                    <img class="img-fluid" src="/img/hero-img-lg.webp" alt="rew mainboard">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const visible = useState('visible')
</script>

<style scoped>
.slate-partner-logo {
    max-height: 187px;
}

.clickable {
    text-decoration: none;
    border-radius: 35px;
    transition: all linear .2s;
    position: relative;
    padding: 6px 0;
}

.clickable:hover {
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.clickable:hover .more-info {
    transform: translate(-50%, 50%);
    opacity: 1;
}

@media screen and (max-width: 1024px) {
    .clickable img {
        transform: scale(1) !important
    }

    .clickable:hover {
        box-shadow: none !important;
    }
}

.more-info {
    transform: translate(-50%, 125%);
    width: 30%;
    border-radius: 35px;
    border: none;
    background-color: var(--rew-primary-green);
    color: #fff;
    font-size: 1rem;
    padding: .25rem .5rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.2s ease-out;
    text-align: center;
}
</style>