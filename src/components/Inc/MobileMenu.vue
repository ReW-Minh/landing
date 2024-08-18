<template>
    <div class="offcanvas offcanvas-end border-start-0" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn btn-clear d-flex align-items-center" data-bs-dismiss="offcanvas"
                aria-label="Close">
                <span class="me-2 rew-text-brown">CLOSE</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5459 13.9541C15.7572 14.1654 15.876 14.4521 15.876 14.751C15.876 15.0499 15.7572 15.3365 15.5459 15.5479C15.3346 15.7592 15.0479 15.8779 14.749 15.8779C14.4501 15.8779 14.1635 15.7592 13.9521 15.5479L7.99996 9.59379L2.0459 15.546C1.83455 15.7573 1.54791 15.8761 1.24902 15.8761C0.950136 15.8761 0.663491 15.7573 0.452147 15.546C0.240802 15.3346 0.12207 15.048 0.12207 14.7491C0.12207 14.4502 0.240802 14.1636 0.452147 13.9522L6.40621 8.00004L0.454022 2.04598C0.242677 1.83464 0.123945 1.54799 0.123945 1.2491C0.123945 0.950219 0.242677 0.663574 0.454022 0.45223C0.665366 0.240885 0.95201 0.122153 1.2509 0.122153C1.54978 0.122153 1.83643 0.240885 2.04777 0.45223L7.99996 6.40629L13.954 0.451292C14.1654 0.239948 14.452 0.121216 14.7509 0.121216C15.0498 0.121216 15.3364 0.239948 15.5478 0.451292C15.7591 0.662636 15.8778 0.949281 15.8778 1.24817C15.8778 1.54705 15.7591 1.8337 15.5478 2.04504L9.59371 8.00004L15.5459 13.9541Z"
                        fill="#433129" />
                </svg>
            </button>
        </div>
        <div class="offcanvas-body">
            <div class="d-flex flex-column h-100" style="overflow: hidden">
                <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                    <router-link class="menu-link" :to="{ name: 'Home' }" @click="hideCanvas">
                        Home
                    </router-link>
                    <router-link class="menu-link" :to="{ name: 'PowerCampus' }" @click="hideCanvas">
                        PowerCampus
                    </router-link>
                    <router-link class="menu-link" :to="{ name: 'OurTeam' }" @click="hideCanvas">
                        Our Team
                    </router-link>
                    <a class="menu-link" @click="hideCanvas" :href="RESOURCE_LINK" target="_blank">
                        ReSource
                    </a>
                    <a class="menu-link" @click="hideCanvas" :href="PODCAST_LINK" target="_blank">
                        Podcast
                    </a>
                </div>
                <div class="menu-btm">
                    <div class="d-flex align-items-center justify-content-center mb-3 mx-5" style="overflow: hidden">
                        <a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2">
                            <img src="/src/assets/img/instagram-green.svg" alt="instagram">
                        </a>
                        <a href="https://www.linkedin.com/company/reworkflow/about/" class="mx-2">
                            <img src="/src/assets/img/linkedin-green.svg" alt="linkedin">
                        </a>
                    </div>
                    <div class="text-center">
                        <img src="/src/assets/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Offcanvas } from 'bootstrap'
import { _ROUTES } from '../../router/routes'
import { PODCAST_LINK, RESOURCE_LINK } from '../../constants'

let bsOffcanvas
const hideCanvas = () => {
    bsOffcanvas.hide()
}

onMounted(() => {
    bsOffcanvas = new Offcanvas('#offcanvasRight')
})
</script>

<style scoped>
.btn.btn-clear {
    border: none !important
}

.indicator {
    background: #433129;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    right: 110px;
    top: 28px;
    transition: all linear .3s;
}

.indicator.expanded {
    transform: rotate(-180deg)
}
</style>