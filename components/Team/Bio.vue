<template>
  <BaseCardItem @click="bio.visible = true" squareImage>
    <template #image>
      <img @load="loading = false" alt="user picture" :src="bio.picture" class="bio-picture"
           :class="{ hidden: loading }"/>
      <Skeleton v-if="loading" height="280px" borderRadius="0px"/>
    </template>

    <template #title>
      <div class="line-clamp-1">{{ bio.name }}</div>
    </template>

    <template #subtitle>
      <div class="line-clamp-2 fs-7">
        {{ bio.title }}
      </div>
    </template>

    <template v-if="bio.cert || bio.clickUp" #cert>
      <div class="absolute bottom-8 right-5 z-10 flex items-center gap-2">
        <div v-if="bio.cert">
          <img :src="bio.cert" alt="slate certified" width="36" height="36"/>
        </div>

        <template v-if="bio.clickUp">
          <ClickUp width="48" height="48"/>
        </template>

      </div>
    </template>
  </BaseCardItem>
</template>

<script setup lang="ts">
import ClickUp from '~/components/Icon/ClickUp.vue'

defineProps(['bio'])

const loading = ref(true)
</script>