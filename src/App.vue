<template>
  <div id="app">
    <div class="container">
      <h1>echo ui</h1>
      <h2>e-data-table</h2>
      <EDataTablePreview class="container__item" />
      <h2>e-tabs</h2>
      <ETabsPreview class="container__item" />
      <h2>e-select</h2>
      <ESelectPreview class="container__item" />
    </div>
  </div>
</template>

<script>
import EDataTablePreview from "@/components/e-data-table-preview.vue";
import ETabsPreview from "@/components/e-tabs-preview.vue";
import ESelectPreview from "@/components/e-select-preview.vue";
export default {
  name: "App",
  components: {
    ESelectPreview,
    ETabsPreview,
    EDataTablePreview,
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 1500px;

  &__item {
    margin: 10px 0;
  }
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

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  display: block;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(var(--font-color));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--font-color), 0.7);
}

* {
  scrollbar-color: rgb(var(--font-color)) transparent;
  scrollbar-width: thin;
}
</style>
