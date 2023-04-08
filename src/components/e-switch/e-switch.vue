<template>
  <div
    class="switch-container"
    :class="{ checked: isChecked }"
    @click="toggleCheck"
  >
    <div class="switch"></div>
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

<style scoped>
.switch-container {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.switch {
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 10px;
  position: relative;
  margin-right: 10px;
}

.switch::after {
  content: "";
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -1px;
  left: -1px;
  transition: transform 0.2s ease-in-out;
}

.checked .switch::after {
  transform: translateX(20px);
}

.label {
  font-size: 16px;
}
</style>
