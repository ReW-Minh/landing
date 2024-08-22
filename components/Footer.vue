<template>
    <section v-if="!useRoute().meta.hideCTA" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
        class="sub-footer py-6 text-center text-uppercase overflow-hidden">
        <div class="container-fluid">
            <CallToAction size="lg" />
        </div>
    </section>

    <footer>
        <div class="container-fluid">
            <div class="md:mx-0 mx-12 md:border-b">
                <div class="grid grid-cols-12 mb-3">
                    <div class="md:col-span-4 col-span-12">
                        <div class="md:mx-0 mx-auto" style="max-width: 177px;">
                            <div class="bg-white logo-container">
                                <img src="/img/logo-min.svg" alt="rew" class="img-fluid">
                            </div>
                            <div class="hidden md:flex items-center justify-center mt-3">
                                <a href="https://www.instagram.com/reworkflow/" target="_blank"
                                    class="mx-2 social-hover instagram">
                                    <img src="/img/instagram.svg" alt="instagram">
                                </a>
                                <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank"
                                    class="mx-2 social-hover linkedin">
                                    <img src="/img/linkedin.svg" alt="linkedin">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-3 col-span-12">
                        <ul class="footer-link-list !mt-6 md:!mt-0 md:block flex items-center justify-between">
                            <li>
                                <NuxtLink class="footer-link" to="/">home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="footer-link" to="/our-team">our team</NuxtLink>
                            </li>
                            <li>
                                <a class="footer-link" :href="RESOURCE_LINK">ReSource</a>
                            </li>
                            <li>
                                <a class="footer-link" :href="PODCAST_LINK">Podcast</a>
                            </li>
                        </ul>
                    </div>
                    <div class="md:col-span-3 col-span-12 text-center-sm">
                        <div class="footer-link !mt-6 md:!mt-0 !mb-0 block">Contact Us</div>
                        <a class="mail-link block underline" href="mailto:solutions@reworkflow.com">solutions@reworkflow.com</a>
                    </div>
                    <div class="col-span-12 md:hidden">
                        <div class="flex items-center justify-center mt-12">
                            <a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2"
                                style="max-width: 28px">
                                <img src="/img/instagram.svg" alt="instagram">
                            </a>
                            <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank" class="mx-2"
                                style="max-width: 28px">
                                <img src="/img/linkedin.svg" alt="linkedin">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:mx-0 mx-12 text-end text-white mt-3 copyright">ReWorkflow, LLC. All Rights Reserved ©, 2024.</div>
        </div>
    </footer>
</template>

<script setup>
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