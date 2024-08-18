<template>
    <div class="m-2 px-3 px-sm-0 position-relative" style="min-height: 90%">
        <div v-if="!public" class="text-start mb-3">
            <ActionBio type="add" />
            <ChangeOrder v-if="bios.length > 1" />
        </div>
        <Transition>
            <div v-show="!store.loading" class="row w-100" :class="public ? 'g-5' : 'g-4'">
                <div class="col-lg-4 col-md-6" v-for="(bio, index) in bios" :key="bio.id" data-aos="zoom-in-down"
                    data-aos-offset="50" :data-aos-delay="index * 50">
                    <Card :class="public ? 'card-clickable bio-card' : 'card-hover bio-card'"
                        style="width: 100%; height: 100%; overflow: hidden; position: relative"
                        @click="handleViewBio(bio.id)">
                        <template #header>
                            <div class="w-100" style="height: 280px">
                                <img v-if="bio.picture" alt="user picture" :src="`${baseUrl}${bio.picture}`"
                                    class="bio-picture" />
                                <img v-else alt="user picture" src="/src/assets/img/RWF_06@300.png"
                                    class="bio-picture opacity-75" />
                            </div>
                        </template>
                        <template #title>{{ bio.name }}</template>
                        <template #subtitle>
                            <template v-if="public">
                                <div class="max-line max-line-2 fs-7" v-html="bio.content"></div>
                            </template>
                            <template v-else>
                                <div class="fs-7">
                                    <strong>Created at: </strong> {{ formatDate(bio.createdDate) }}
                                </div>
                                <div class="fs-7">
                                    <strong>Last update: </strong> {{ formatDate(bio.lastUpdate) }}
                                </div>
                            </template>
                            <div class="position-absolute hover d-flex align-items-center justify-content-center">
                                <ViewBio :data="bio" :public="public" />
                                <template v-if="!public">
                                    <ActionBio type="edit" :data="bio" />
                                    <DeleteBio :data="bio" />
                                </template>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </Transition>
        <Transition>
            <div v-show="store.loading"
                class="position-absolute align-items-center justify-content-center top-50 start-50 translate-middle"
                style="display: flex">
                <div class="loading-indicator"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import ActionBio from '../../components/Admin/Bio/ActionBio.vue'
import ChangeOrder from '../../components/Admin/Bio/ChangeOrder.vue'
import DeleteBio from '../../components/Admin/Bio/DeleteBio.vue'
import ViewBio from '../../components/Admin/Bio/ViewBio.vue'

import { useBio } from '../../services/useBio'
import { useLoadingStore } from '../../store/loading'
import { formatDate } from '../../utils'

const { bios, getBio } = useBio()

const props = defineProps(['public'])

const store = useLoadingStore()

const baseUrl = import.meta.env.VITE_URL_API

const handleViewBio = id => {
    if (!props.public)
        return

    const bio = bios.value.find(x => x.id === id)
    bio.visible = true
}

if (!props.public) {
    bios.value = []
    getBio()
}
</script>

<style lang="scss">
.bio-card {
    .bio-picture {
        object-fit: cover;
        height: 100%;
        width: 100%;
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
        }
    }
}
</style>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>