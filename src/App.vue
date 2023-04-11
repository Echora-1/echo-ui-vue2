<template>
  <div id="app">
    <test-page />
    <div class="container">
      <div class="dir-wrap" @click="open = !open">
        <DirIcon class="dir" />
        <p>Components</p>
      </div>
    </div>
    <Transition duration="300" name="nested">
      <dir-page v-if="open" @close="open = false" />
    </Transition>
  </div>
</template>

<script>
import TestPage from "@/page/TestPage.vue";
import DirIcon from "@/components/icon/DirIcon.vue";
import DirPage from "@/components/widgets/DirPage.vue";
export default {
  name: "App",
  components: { DirPage, DirIcon, TestPage },

  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.dir {
  transition: 200ms;
  width: 64px;
  height: 52px;
}

.container {
  padding: 32px 40px 0;
  display: flex;
  width: 100%;
}

.dir-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;

  p {
    letter-spacing: -0.025em;
    font-size: 12px;
    font-weight: 500;
    transition: 200ms;
    opacity: 0.75;
  }

  &:hover {
    cursor: pointer;

    svg {
      transform: scale(1.05);
    }

    p {
      opacity: 1;
    }
  }
}
</style>

<style>
@import "./assets/styles/normalize.css";

:root {
  --body: 12, 15, 29;
  --backgraund: 27, 29, 42;
  --font-color: 221, 221, 212;
  --primary: 101, 126, 248;
  --invalid: 234, 52, 52;
  --radius: 14px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

body {
  background-color: rgb(var(--body));
  color: rgb(var(--font-color));
  /*
  background-image: url("./blurry-gradient-haikei.svg");
  */
  background-image: url("./pxfuel.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
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

.nested-enter-active,
.nested-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(60px) scale(0.9);
  opacity: 0;
}
</style>
