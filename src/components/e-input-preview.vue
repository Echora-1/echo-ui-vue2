<template>
  <e-input
    type="email"
    id="email"
    name="email"
    label="Currency"
    placeholder="Email *"
    v-model="currency"
  >
    <template #header>
      <span class="available">Available: 123</span>
    </template>
    <template #suffix>
      <span class="sell">SELL</span>
    </template>
    <template #prefix>
      <span class="btc">BTC</span>
    </template>
  </e-input>
</template>
<script>
import EInput from "@/components/e-input/e-input.vue";

export default {
  components: { EInput },

  data() {
    return {
      currency: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.sell {
  padding-right: 15px;
}

.btc {
  padding-left: 15px;
}

.available {
  margin-left: auto;
}
</style>
