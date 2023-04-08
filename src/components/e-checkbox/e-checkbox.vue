<template>
  <div class="checkbox-container" @click="toggleCheck">
    <div :class="{ checkbox: true, checked: isChecked }"></div>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    checked: Boolean,
  },
  data() {
    return {
      isChecked: this.checked || false,
    };
  },
  methods: {
    toggleCheck() {
      this.isChecked = !this.isChecked;
      this.$emit("update:checked", this.isChecked);
    },
  },
};
</script>

<style scoped lang="scss">
.checkbox-container {
  display: inline-flex;
  align-items: center;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s;
  position: relative;
  z-index: 1;

  &::before {
    transition: all 0.25s ease;
    border: 2px solid rgba(var(--backgraund), 1);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(var(--primary));
    transition: all 0.25s ease;
    transform: scale(0.5);
    opacity: 0;
    border-radius: 4px;
    background-image: url("./assets/inputCheckWhite.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    background-color: rgb(var(--backgraund));
  }
}

.checked {
  color: white;
  &:hover {
    background-color: transparent;
  }

  &::before {
    opacity: 0;
    transform: scale(1.2);
    border: 2px solid rgba(var(--backgraund), 0);
  }

  &::after {
    transform: scale(1);
    opacity: 1;
  }
}

.label {
  font-size: 16px;
  cursor: pointer;
}
</style>
