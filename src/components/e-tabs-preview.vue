<template>
  <div>
    <div class="action">
      <p>counter: {{ counter }}</p>
      <e-button @click="counter++">inc</e-button>
    </div>
    <e-tabs v-model="tab">
      <e-tab> Web</e-tab>
      <e-tab> Shopping</e-tab>

      <e-tab-item>
        <div style="padding: 20px">counter: {{ counter }}</div>
      </e-tab-item>
      <e-tab-item>
        <div style="padding: 20px">body Shopping</div>
      </e-tab-item>
    </e-tabs>
  </div>
</template>
<script>
import ETabs from "@/components/e-tabs/e-tabs.vue";
import ETab from "@/components/e-tabs/ui/e-tab/e-tab.vue";
import ETabItem from "@/components/e-tabs/ui/e-tab-item/e-tab-item.vue";
import EButton from "@/components/e-button/e-button.vue";

export default {
  components: { EButton, ETabItem, ETab, ETabs },

  data() {
    return {
      tab: 0,
      items: ["web", "shopping", "videos"],
      counter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  p {
    min-width: 60px;
  }
}
</style>
