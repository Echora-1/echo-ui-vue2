<template>
  <div id="app">
    <EDataTablePreview class="table"/>
    <ETabsPreview />
  </div>
</template>

<script>
import EDataTablePreview from "@/components/e-data-table-preview.vue";
import ETabsPreview from "@/components/e-tabs-preview.vue";
export default {
  name: 'App',
  components: {
    ETabsPreview,
    EDataTablePreview,
  }
}
</script>


<style scoped>
.table {
  margin-bottom: 20px;
}
</style>

<style>
:root {
  --body: 12, 15, 29;
  --font-color: 221, 221, 212;
  --primary: 101, 126, 248;
  --backgraund: 27, 29, 42;
  --radius: 14px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: rgb(var(--body));
  color: rgb(var(--font-color));
}
</style>
