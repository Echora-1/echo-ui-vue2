<template>
  <div class="container">
    <base-header />
    <div class="content-wrap">
      <div class="content">
        <h1>echo ui</h1>
        <h2>e-data-table</h2>
        <EDataTablePreview class="container__item" />
        <h2>e-tabs</h2>
        <ETabsPreview class="container__item" />
        <h2>e-select</h2>
        <ESelectPreview class="container__item" />
        <h2>e-input</h2>
        <e-input-preview />
        <h2>e-datepicker</h2>
        <e-datepicker placeholder="Select date" />
        <h2>e-checkbox</h2>
        <e-checkbox label="checkbox" />
        <h2>e-radio</h2>
        <e-radio
          label="1 radio"
          value="1"
          :selected-value="radio"
          @update:selectedValue="radio = $event"
        />
        <e-radio
          label="2 radio"
          value="2"
          :selected-value="radio"
          @update:selectedValue="radio = $event"
        />
        <h2>e-switch</h2>
        <e-switch />
      </div>
    </div>
  </div>
</template>

<script>
import EDataTablePreview from "@/components/e-data-table-preview.vue";
import ETabsPreview from "@/components/e-tabs-preview.vue";
import ESelectPreview from "@/components/e-select-preview.vue";
import EInputPreview from "@/components/e-input-preview.vue";
import EDatepicker from "@/components/e-datepicker/e-datepicker.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import ECheckbox from "@/components/e-checkbox/e-checkbox.vue";
import ERadio from "@/components/e-radio/e-radio.vue";
import ESwitch from "@/components/e-switch/e-switch.vue";
export default {
  components: {
    ESwitch,
    ERadio,
    ECheckbox,
    BaseHeader,
    EInputPreview,
    ESelectPreview,
    ETabsPreview,
    EDataTablePreview,
    EDatepicker,
  },
  data() {
    return {
      radio: "",
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  &__item {
    margin: 10px 0;
  }
}
.content-wrap {
  background: #33343f;
  border-radius: 0 30px 0 0;
}
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
