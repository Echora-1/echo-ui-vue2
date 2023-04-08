<template>
  <div id="app">
    <MainHeader />
    <main class="main">
      <MainPage class="page" />
      <aside class="aside">
        <!--
        <DecorIcon class="aside__decor" />
-->
        <div class="aside__decor">
          <div></div>
        </div>
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
  background: rgb(var(--backgraund));
  width: 260px;
  position: fixed;
  margin: 0;
  top: 57px;
  left: 0;
  bottom: 0;
  border-right: 0;

  &__decor {
    background: rgb(var(--backgraund));
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 200;
    right: -40px;
    top: 11px;
    pointer-events: none;

    & > div {
      background: rgb(var(--body));
      width: 40px;
      height: 40px;
      border-radius: 30px 0 0 0;
    }
  }
}
</style>

<style>
@import "./assets/styles/normalize.css";

:root {
  --body: 12, 15, 29;
  --font-color: 221, 221, 212;
  --primary: 101, 126, 248;
  --backgraund: 27, 29, 42;
  --invalid: 234, 52, 52;
  --radius: 14px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: rgb(var(--body));
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
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}
</style>
