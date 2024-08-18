<template>
    <section class="pt-3" id="home">
        <div class="container-fluid">
            <div class="row g-1">
                <div class="col-lg-8 col-md-7 col-6">
                    <div class="d-flex flex-column h-100">
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100"
                            class="left-home-block position-relative mt-2 mt-md-5">
                            <h1 class="hero-title rew-text-green">Slate Support and Staffing Solutions
                                <span class="rew-text-brown">
                                    without the <br>
                                    Difficulties of <br class="d-none d-lg-block">
                                </span>
                                <span class="rew-font">Re</span>
                                <span class="rew-text-brown">Hiring</span>
                            </h1>
                            <button class="rew-main-btn rew-box-shadow position-absolute position-sm-relative"
                                style="bottom: 0; right: -12px" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span>{{ content?.callToAction }}</span>
                                <span class="ms-md-3 ms-1">
                                    <svg class="button-arrow" width="34" height="28" viewBox="0 0 34 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.16671 27.75L0.958374 24.5417L11.4427 14L0.958374 3.45833L4.16671 0.25L17.9167 14L4.16671 27.75ZM19.2917 27.75L16.0834 24.5417L26.5677 14L16.0834 3.45833L19.2917 0.25L33.0417 14L19.2917 27.75Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200"
                            class="left-home-block d-flex align-items-center mt-3">
                            <span class="small-image rew-box-shadow rew-bg-gradient d-lg-block d-none">
                                <img src="/src/assets/img/hero-img-sm.webp" alt="rew small mainboard" class="img-fluid">
                            </span>
                            <span class="rew-text-brown fs-24 fs-sm-10 ms-lg-4 ms-0 fw-light">
                                {{ content?.subText }}
                            </span>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" data-aos-offset="-500"
                            class="left-home-block my-auto">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <a target="_blank"
                                        href="https://technolutions.com/community/slate-preferred-partners"
                                        class="clickable d-flex align-items-center h-100">
                                        <span class="d-flex align-items-center justify-content-center max-width-sm">
                                            <img src="/src/assets/img/slate-logo.webp" alt="slate"
                                                class="slate-partner-logo ps-0 ps-lg-2">
                                        </span>
                                        <span
                                            class="ms-1 ms-md-3 fs-36 fs-sm-10 fs-md-26 fw-700 text-capitalize rew-text-brown">
                                            <span class="rew-text-green">
                                                Slate
                                            </span>
                                            Preferred <br> Partner
                                        </span>
                                        <span class="more-info d-none d-lg-block">More info</span>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <a target="_blank" :href="RESOURCE_LINK"
                                        class="clickable d-flex align-items-center h-100">
                                        <span class="d-flex align-items-center justify-content-center max-width-sm">
                                            <img src="/src/assets/img/brainstorm.svg" alt="brainstorm"
                                                class="ps-0 ps-lg-2">
                                        </span>
                                        <span
                                            class="ms-1 ms-md-3 fs-36 fs-sm-10 fs-md-26 fw-700 text-capitalize rew-text-brown">
                                            <span style="white-space: nowrap;">
                                                <span class="rew-text-green ms-sm-n2 rew-font"
                                                    style="margin-right: -7px">
                                                    Re
                                                </span>
                                                <span style="text-transform: none !important;">
                                                    Source:
                                                </span>
                                            </span>
                                            <br> A Slaters <br class="d-none d-lg-block"> Wiki
                                        </span>
                                        <span class="more-info d-none d-lg-block">More info</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700"
                    class="col-lg-4 col-md-5 col-6 d-flex align-items-center justify-content-end">
                    <img class="img-fluid" src="/src/assets/img/hero-img-lg.webp" alt="rew mainboard">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { RESOURCE_LINK } from '../../constants'
import { useHomeText } from '../../services/useHomeText'

const { textContent } = useHomeText()

const content = computed(() => textContent.value?.home)
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