<template>
  <e-tabs v-model="tab">
    <e-tab> Web </e-tab>
    <e-tab> Shopping </e-tab>

    <e-tab-item>
      <div style="padding: 20px">body Web</div>
    </e-tab-item>
    <e-tab-item>
      <div style="padding: 20px">body Shopping</div>
    </e-tab-item>
  </e-tabs>
</template>
<script>
import ETabs from "@/components/e-tabs/e-tabs.vue";
import ETab from "@/components/e-tabs/ui/e-tab/e-tab.vue";
import ETabItem from "@/components/e-tabs/ui/e-tab-item/e-tab-item.vue";
export default {
  components: { ETabItem, ETab, ETabs },

  data() {
    return {
      tab: 0,
      items: ["web", "shopping", "videos"],
    };
  },
};
</script>
