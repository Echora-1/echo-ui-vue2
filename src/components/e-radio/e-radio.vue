<template>
  <div class="radio-container" @click="select">
    <div :class="{ radio: true, selected: isSelected }">
      <!--
      <div v-if="isSelected" class="inner-circle"></div>
-->
    </div>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    selectedValue: String,
  },
  computed: {
    isSelected() {
      return this.value === this.selectedValue;
    },
  },
  methods: {
    select() {
      this.$emit("update:selectedValue", this.value);
    },
  },
};
</script>

<style scoped lang="scss">
.radio-container {
  display: inline-flex;
  align-items: center;
}

.radio {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(var(--backgraund), 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(var(--backgraund), 0.7);
  }
}

.selected {
  border-color: rgb(var(--primary));
  border-width: 8px;

  &:hover {
    border-color: rgb(var(--primary));
  }
}

.inner-circle {
  width: 10px;
  height: 10px;
  background-color: #007bff;
  border-radius: 50%;
}
.label {
  font-size: 16px;
  cursor: pointer;
}
</style>
