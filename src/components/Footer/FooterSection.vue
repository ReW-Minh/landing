<template>
    <section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
        class="sub-footer py-4 text-center text-uppercase">
        <div class="container-fluid">
            <button class="rew-main-btn rew-box-shadow" data-bs-toggle="modal" data-bs-target="#contactModal">
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
    </section>

    <footer>
        <div class="container-fluid">
            <div class="mx-md-0 mx-5 border-bottom border-sm-none">
                <div class="row mb-3">
                    <div class="col-md-4 col-12">
                        <div class="mx-md-0 mx-auto" style="max-width: 177px;">
                            <div class="bg-white logo-container">
                                <img src="/src/assets/img/logo-min.svg" alt="rew" class="img-fluid">
                            </div>
                            <div class="d-none d-md-flex align-items-center justify-content-center mt-3">
                                <a href="https://www.instagram.com/reworkflow/" target="_blank"
                                    class="mx-2 social-hover instagram">
                                    <img src="/src/assets/img/instagram.svg" alt="instagram">
                                </a>
                                <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank"
                                    class="mx-2 social-hover linkedin">
                                    <img src="/src/assets/img/linkedin.svg" alt="linkedin">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                        <ul class="footer-link-list mt-4 d-md-block d-flex align-items-center justify-content-between">
                            <li>
                                <a class="footer-link" href="#">home</a>
                            </li>
                            <li>
                                <a class="footer-link" href="#about">about</a>
                            </li>
                            <li>
                                <a class="footer-link" href="#service">services</a>
                            </li>
                            <li>
                                <a class="footer-link" href="#faq">FAQs</a>
                            </li>
                            <li v-if="currentMode === 'staging'">
                                <router-link class="footer-link" :to="{ name: 'AdminBio' }">Admin</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-12 text-center-sm">
                        <div class="footer-link mt-4 mb-sm-0 d-block">contact us</div>
                        <a class="mail-link" href="mailto:solutions@reworkflow.com">solutions@reworkflow.com</a>
                    </div>
                    <div class="col-12 d-md-none">
                        <div class="d-flex align-items-center justify-content-center mt-5">
                            <a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2"
                                style="max-width: 28px">
                                <img src="/src/assets/img/instagram.svg" alt="instagram">
                            </a>
                            <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank" class="mx-2"
                                style="max-width: 28px">
                                <img src="/src/assets/img/linkedin.svg" alt="linkedin">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-md-0 mx-5 text-end text-white mt-3 copyright">{{ content?.copyright }}</div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useHomeText } from '../../services/useHomeText'

const { textContent } = useHomeText()
const content = computed(() => textContent.value?.footer)

const currentMode = import.meta.env.MODE
</script>

<style scoped>
.social-hover {
    position: relative;
}

.social-hover::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    outline: 2px solid white;
    outline-offset: 0px;
    opacity: 0;
    transition: all linear .1s
}

.social-hover:hover::before {
    opacity: 1;
    outline-offset: 3px;
}

.social-hover img {
    transition: all linear .1s
}

.social-hover:hover img {
    transform: scale(0.8)
}

.social-hover.instagram::before {
    background: linear-gradient(45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%);
    border-radius: 12px;
}

.social-hover.linkedin::before {
    background: #0077B5;
    border-radius: 6px;
}
</style>