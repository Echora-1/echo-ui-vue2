<template>
  <button
    :class="[
      'common-button',
      {
        'common-button--disabled': disabled,
        'common-button--loading': loading,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
    <span class="loader-wrap">
      <span v-if="loading" class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    buy: {
      type: Boolean,
      default: false,
    },
    sell: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.086);
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 6px 24px;
  justify-content: center;
  position: relative;

  @media (max-width: 767px) {
    padding: 10px 16px;
    font-size: 16px;
    line-height: 125%;
  }
  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
  }
}

.loader-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 4px;
  height: 25px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #fff;
  box-sizing: border-box;
  animation: animloader 0.45s 0.3s linear infinite alternate;
}

.loader::after,
.loader::before {
  content: "";
  width: 4px;
  height: 25px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
  box-sizing: border-box;
  animation: animloader 0.45s 0.45s linear infinite alternate;
}
.loader::before {
  left: -11px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 28px;
  }
  100% {
    height: 3px;
  }
}
</style>
