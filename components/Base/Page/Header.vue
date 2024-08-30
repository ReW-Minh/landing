<template>
    <div data-aos="fade-down" class="!mb-6 md:!mb-12 heading text-center container-fluid">
        <slot />

        <div data-aos="fade-down" class="font-normal italic subtitle mx-4 opacity-90">
            <slot name="subtitle" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    font-size: 36px;
    font-weight: 600;
    color: var(--rew-primary-brown);

    .subtitle {
        font-size: 20px;
        color: var(--rew-secondary-green);
    }
}

@media (max-width: 720px) {
    .heading {
        font-size: 24px;

        .subtitle {
            font-size: 16px;
        }
    }
}
</style>