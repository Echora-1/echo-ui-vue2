<template>
  <div ref="page" class="page">
    <div class="wrap">
      <header ref="header" class="header-page">
        <div class="header__content">
          <div ref="flex" class="flex-header">
            <h1 ref="title" id="header-title">Title</h1>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.$refs.up) {
        if (window.scrollY > 300) {
          this.$refs.up.classList.add("active");
        } else {
          this.$refs.up.classList.remove("active");
        }
      }

      if (this.$refs.title && this.$refs.flex) {
        console.log("rab");
        this.$refs.title.style.fontSize = `${
          35 - window.scrollY / 7 > 24 ? 35 - window.scrollY / 8 : 20
        }px`;

        this.$refs.flex.style.marginBottom = `${
          70 - window.scrollY / 2 > 0 ? 70 - window.scrollY / 2 : 0
        }px`;
      }
      if (this.$refs.header) {
        if (window.scrollY > 140) {
          this.$refs.header.classList.add("fixed");
          // console.dir(this.$refs.page)
          this.$refs.header.style.width = `${this.$refs.page.offsetWidth}px`;
          // this.$refs.page.style.paddingTop = '200px'
        } else {
          this.$refs.header.style.width = `100%`;
          // this.$refs.page.style.paddingTop = '0px'
          this.$refs.header.classList.remove("fixed");
        }
      }
    });

    window.addEventListener("resize", () => {
      if (window.scrollY > 140) {
        this.$refs.header.classList.add("fixed");
        // console.dir(this.$refs.page)
        this.$refs.header.style.width = `${this.$refs.page.offsetWidth}px`;
        // this.$refs.page.style.paddingTop = '200px'
      } else {
        this.$refs.header.style.width = `100%`;
        // this.$refs.page.style.paddingTop = '0px'
        this.$refs.header.classList.remove("fixed");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.page {
  background: #33343f;
}

.wrap {
  border-radius: 0 0 0 30px;
  background: rgb(var(--body));
}

.header-page {
  .decor {
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

.header-page .header__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  background: transparent;
  padding: 0 40px !important;
}

.header-page .header__content,
.page-edit,
.page-nav,
.page .content__default {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

.header-page .header__content .flex-header {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 70px;
}

.header-page .header__content h1 {
  font-size: 35px;
  margin: 0;
  padding: 13px 0 15px;
  font-weight: 600;
}

.header-page.fixed {
  position: fixed;
  top: 68px;
  z-index: 9999;
  border-radius: 0;
  margin: 0;
  box-shadow: none;
  background: transparent;
  backdrop-filter: blur(5px);
  background-size: cover;
}

.header-page {
  height: auto;
  border-radius: 0 0 0 30px;
  transition: background 0.25s ease, border-radius 0.25s ease;
  top: 0;
}

.header-page.fixed .header__content {
  height: 58px;
}
</style>
