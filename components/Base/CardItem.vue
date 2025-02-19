<template>
  <Card class="bio-card w-full h-full overflow-hidden relative" :class="{ 'card-clickable': hoverEffect }">
    <template #header>
      <div class="w-full overflow-hidden" :class="imageHeight">
        <slot name="image"/>
      </div>
    </template>
    <template #title>
      <slot name="title"/>
    </template>
    <template #subtitle>
      <slot name="subtitle"/>
    </template>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps({
  hoverEffect: {
    type: Boolean,
    default: true
  },
  squareImage: {
    type: Boolean,
    default: false
  },
  customHeight: {
    type: Boolean,
    default: false
  }
})

const imageHeight = computed(() => {
  if (props.customHeight) {
    return 'h-[384px]'
  }

  return props.squareImage ? 'aspect-square' : 'h-[280px]'
})
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
      box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

      .bio-picture {
        transform: scale(1.05)
      }
    }
  }
}
</style>