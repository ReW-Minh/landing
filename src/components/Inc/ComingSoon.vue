<template>
    <div data-aos="zoom-out" class="content-wrapper position-relatve">
        <div>
            <h1 class="text-uppercase text-center px-3">Under construction</h1>
            <p class="text-center">page nearly ready</p>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    --content-height: 136px;
    display: grid;
    place-items: center;
    height: calc(100vh - 109px - var(--content-height))
}

h1 {
    color: var(--rew-primary-green);
    font-size: 60px;
}

p {
    color: var(--rew-secondary-green);
    letter-spacing: 5.5px;
}

@media (max-width: 1023px) {
    .content-wrapper {
        --content-height: 128px
    }
}

@media (max-width: 767px) {
    .content-wrapper {
        --content-height: 38px
    }
}

@media (max-width: 510px) {
    h1 {
        font-size: 11.7vw;
    }
}
</style> 