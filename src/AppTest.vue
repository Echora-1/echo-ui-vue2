<!--
<template>
  <div id="app">
    <MainHeader />
    <main class="main">
      <MainPage class="page" />
      <aside class="aside">
        <DecorIcon class="aside__decor" />
      </aside>
    </main>
  </div>
</template>

<script>
import MainPage from "@/page/MainPage.vue";
import MainHeader from "@/components/widgets/MainHeader.vue";
import DecorIcon from "@/components/icon/DecorIcon.vue";

export default {
  name: "App",
  components: { DecorIcon, MainHeader, MainPage },
};
</script>

<style lang="scss" scoped>
.page {
  display: block;
  margin-top: 68px;
  position: relative;
  margin-bottom: 0;
  /*
  padding-top: 200px;
  */
  margin-left: 260px;
  transition: all 0.25s ease;
  width: calc(100% - 260px);
  background-image: url("./bg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;
}

.aside {
  padding-right: 5px;
  z-index: 12000;
  transition: all 0.25s ease;
  overflow: inherit;
  font-size: 16px;
  background: rgb(var(&#45;&#45;backgraund));
  width: 260px;
  position: fixed;
  margin: 0;
  top: 57px;
  left: 0;
  bottom: 0;
  border-right: 0;

  &__decor {
    color: rgb(var(&#45;&#45;backgraund));
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 200;
    right: -30px;
    top: 11px;
    pointer-events: none;
  }
}
</style>

<style>
@import "./assets/styles/normalize.css";

:root {
  &#45;&#45;body: 12, 15, 29;
  &#45;&#45;backgraund: 27, 29, 42;
  &#45;&#45;font-color: 221, 221, 212;
  &#45;&#45;primary: 101, 126, 248;
  &#45;&#45;invalid: 234, 52, 52;
  &#45;&#45;radius: 14px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: rgb(var(&#45;&#45;body));
  color: rgb(var(&#45;&#45;font-color));
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
  background: rgb(var(&#45;&#45;font-color));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(&#45;&#45;font-color), 0.7);
}

* {
  scrollbar-color: rgb(var(&#45;&#45;font-color)) transparent;
  scrollbar-width: thin;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}
</style>
-->
