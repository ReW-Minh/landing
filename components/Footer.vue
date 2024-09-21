<template>
    <footer>
        <div class="container-fluid">
            <div class="md:mx-0 mx-12">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="flex gap-4">
                        <div class="bg-white logo-container w-[120px] md:w-[120px]">
                            <img src="/img/logo-min.svg" alt="rew" class="img-fluid">
                        </div>
                        <div class="block md:hidden w-[120px] md:w-[120px]">
                            <img src="https://images.squarespace-cdn.com/content/v1/641f3e24b36a211ec50bf362/ed429e0b-776e-4d90-83ec-0857a083ab6e/SlatePreferredPartnerLevel_Gold.png?format=500w"
                                alt="Slate Gold Partner">
                        </div>
                    </div>

                    <div class="grow space-y-5 mt-6 md:mt-0">
                        <div class="flex items-center justify-center gap-3">
                            <a href="https://www.instagram.com/reworkflow/" target="_blank"
                                class="social-hover instagram">
                                <img src="/img/instagram.svg" alt="instagram">
                            </a>

                            <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank"
                                class="social-hover linkedin ms-1">
                                <img src="/img/linkedin.svg" alt="linkedin">
                            </a>

                            <a href="mailto:solutions@reworkflow.com" class="social-hover email">
                                <IconEmailFill fill="white" height="46" width="46" />
                            </a>
                        </div>
                        <div class="text-white text-center">
                            © 2024 ReWorkflow. All Rights Reserved
                        </div>
                    </div>

                    <div class="hidden md:block w-[120px]">
                        <img src="https://images.squarespace-cdn.com/content/v1/641f3e24b36a211ec50bf362/ed429e0b-776e-4d90-83ec-0857a083ab6e/SlatePreferredPartnerLevel_Gold.png?format=500w"
                            alt="Slate Gold Partner">
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
.social-hover {
    position: relative;

    &::before {
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

    &:hover {
        &::before {
            opacity: 1;
            outline-offset: 3px;
        }

        img {
            transform: scale(0.8)
        }

        svg {
            transform: scale(0.9)
        }
    }

    img,
    svg {
        transition: all linear .1s
    }

    &.instagram::before {
        background: linear-gradient(45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%);
        border-radius: 12px;
    }

    &.linkedin::before {
        background: #0077B5;
        border-radius: 6px;
    }

    &.email::before {
        background: var(--rew-primary-green);
        border-radius: 8px;
    }
}
</style>