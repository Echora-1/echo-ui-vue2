<template>
  <div class="page" @click="$emit('close')">
    <div class="page__box" @click.stop></div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  &__box {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.086);
    will-change: transform, opacity;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-height: 560px;
    width: 100%;
    max-width: 1024px;
    position: relative;
    z-index: 20;
    overflow: hidden;
    border-radius: 18px;
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow-color: rgb(0 0 0 / 0.5);
    --tw-shadow: var(--tw-shadow-colored);
    --tw-backdrop-blur: blur(8px);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
  }
}
.apps-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
