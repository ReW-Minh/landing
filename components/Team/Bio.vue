<template>
    <Card class="card-clickable bio-card w-full h-full overflow-hidden relative" @click="bio.visible = true">
        <template #header>
            <div class="w-full h-[280px] overflow-hidden">
                <img @load="loading = false" alt="user picture" :src="bio.picture" class="bio-picture"
                    :class="{ hidden: loading }" />
                <Skeleton v-if="loading" height="280px" borderRadius="0px" />
            </div>
        </template>
        <template #title>{{ bio.name }}</template>
        <template #subtitle>
            <div class="max-line max-line-2 fs-7">
                <div>{{ bio.title }}</div>
            </div>
            <TeamPopup :bio v-model="bio.visible" />
        </template>
    </Card>
</template>

<script setup>
defineProps(['bio'])

const loading = ref(true)
</script>

<style lang="scss">
.bio-card {
    .bio-picture {
        object-fit: cover;
        height: 100%;
        width: 100%;
        transition: all ease-in-out .2s;
    }

    .hover {
        inset: 0;
        background-color: rgba(0, 0, 0, .5);
        opacity: 0;
        transition: all linear .1s;
        --p-icon-size: 30px;
        --p-button-text-primary-color: white
    }

    .p-button-text {
        transition: all linear .1s;
    }

    .p-button-text:not(:disabled):hover {
        background-color: transparent;
        scale: 1.2;
    }

    &.card-hover {
        &:hover {
            .hover {
                opacity: 1;
            }
        }
    }

    &.card-clickable {
        cursor: pointer;
        transition: all ease-in-out .2s;

        &:hover {
            transform: translateY(-5px);
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

            .bio-picture {
                transform: scale(1.05)
            }
        }
    }
}
</style>