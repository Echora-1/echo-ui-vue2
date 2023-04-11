<template>
  <header class="header">
    <div class="header__content">
      <p>Echo IU v1 <sup>BETA</sup></p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0.5rem;

  &__content {
    width: 100%;
    min-height: 36px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 9999px;
    overflow: inherit;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.086);
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 700;
      letter-spacing: -0.025em;
    }

    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
      top: -0.5em;
      color: rgb(var(--primary));
    }
  }
}
</style>
<script setup></script>
