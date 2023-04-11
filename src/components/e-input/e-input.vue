<template>
  <div :class="['wrap', { 'input-focused': focused }]">
    <div class="input-header">
      <label :for="id" :class="['base-label']" v-if="label">
        {{ label }}
      </label>
      <slot name="header"> </slot>
    </div>
    <div class="base-input-wrapper">
      <slot name="prefix"> </slot>
      <input
        :id="id"
        class="base-input"
        v-bind="$attrs"
        :value="value"
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      />
      <slot name="suffix"> </slot>
    </div>
    <p v-show="touched && invalid" class="invalid-text">{{ errorList[0] }}</p>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },

    id: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },
    errorList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      focused: false,
      touched: false,
    };
  },

  computed: {
    invalid() {
      return this.errorList.length > 0;
    },
  },

  methods: {
    inputHandler(event) {
      this.$emit("input", event.target.value);
    },

    focusHandler() {
      this.focused = true;
    },

    blurHandler() {
      this.touched = true;
      this.focused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
}

.base-input-wrapper {
  border-radius: 6px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
  background: rgb(var(--backgraund));
  display: flex;
  align-items: center;
  transition: all 0.3s;
  margin-top: 9px;
  height: 100%;
  overflow: inherit;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.086);
  .suffix {
    color: rgba(var(--font-color), 0.6);
    display: inline-block;
    padding-right: 15px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.41px;
  }
}

.base-input {
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgb(var(--font-color));
  background-color: transparent;
  position: relative;
  caret-color: rgb(var(--primary));
}

.base-input::placeholder {
  color: rgba(var(--font-color), 0.6);
}

.base-label {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: rgb(var(--font-color));
  display: inline-block;
}

.input-focused {
  .base-input-wrapper {
    border-color: rgb(var(--primary));
  }

  .base-input {
  }
}

.invalid-text {
  color: #db0d00;
  position: absolute;
  bottom: 2px;
  left: 0;
  font-size: 13px;
  line-height: 19px;
  margin: 0;
}

.input-header {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>
