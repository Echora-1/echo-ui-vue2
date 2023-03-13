<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  --height-of-loader: 4px;
  width: 100%;
  height: var(--height-of-loader);
  border-radius: 0 0 14px 14px;
  background-color: transparent;
  position: relative;
  overflow: hidden;

}

.loader::before {
  content: "";
  position: absolute;
  background: rgb(var(--primary));
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 0 0 14px 14px;
  animation: moving 1s ease-in-out infinite;
;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}

@media(max-width: 767px) {
  .loader {
    border-radius: var(--radius);
  }

  .loader::before {
    border-radius: var(--radius);
  }
}
</style>
