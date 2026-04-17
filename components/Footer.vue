<template>
  <footer class="relative bg-transparent pb-0 md:pb-10">
    <div class="footer-bg absolute -z-10 -left-[100px] right-0 bottom-28" aria-hidden="true">
      <img src="/img/footer.png" alt=""/>
    </div>

    <div class="footer-base absolute -z-[20] bg-[#6f7f6f] bottom-0 -top-10 left-0 right-0"></div>

    <div class="container-fluid">
      <div class="md:mx-0 mx-12">
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex gap-4">
            <div
                class="bg-white logo-container h-[142px] aspect-square overflow-hidden flex items-center justify-center">
              <img src="/img/logo-5th.png" alt="rew" class="max-w-none w-[180px]">
            </div>
            <div class="block md:hidden w-[120px]">
              <img
                  src="https://reworkflow.com/static/slate_gold.png"
                  alt="Slate Gold Partner">
            </div>
          </div>

          <div class="grow space-y-5 mt-6 md:mt-0">
            <div class="flex items-center justify-center gap-3 flex-wrap">
              <!--<a href="https://www.instagram.com/reworkflow/" target="_blank"
                   class="social-hover instagram">
                  <img src="/img/instagram.svg" alt="instagram">
                </a>-->

              <a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank"
                 class="social-hover linkedin ms-1">
                <img src="/img/linkedin.svg" alt="linkedin">
              </a>

              <a href="mailto:solutions@reworkflow.com" class="social-hover email">
                <IconEmailFill fill="white"/>
              </a>

              <!--<div class="w-full flex items-center justify-center mt-2">
                <a href="tel:2085469221" class="social-hover phone">
                  <IconPhone class="!w-[20px] !h-[20px]" fill="white"/>
                </a>
                <span class="rew-font text-white ms-3 text-xl">208-546-9221</span>
              </div>-->
            </div>
            <div class="text-white text-center">
              © {{ new Date().getFullYear() }} ReWorkflow. All Rights Reserved
            </div>
          </div>

          <div class="invisible md:visible w-[120px]">
            <img
                src="https://reworkflow.com/static/slate_gold.png"
                alt="Slate Gold Partner">
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
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
    outline-offset: 0;
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
    transition: all linear .1s;
    width: 43px;
    height: 43px;
  }

  svg {
    width: 48px;
    height: 48px;
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

  &.phone::before {
    background: #7BB867;
    border-radius: 8px;
  }
}

.footer-bg {
  img {
    -webkit-mask-image: linear-gradient(
        to bottom,
        black 88%,         /* keep more image */
        rgba(0,0,0,0.7) 94%,
        transparent 100%
    );

    mask-image: linear-gradient(
        to bottom,
        black 88%,
        rgba(0,0,0,0.7) 94%,
        transparent 100%
    );
  }
}

.footer-base {
  background: linear-gradient(
      to bottom,
      rgba(111, 127, 111, 0) 0%,   /* transparent at top */
      #6f7f6f 60%                  /* fully solid */
  );
}
</style>