<template>
  <div class="table-footer">
    <p>{{ fromRows }}-{{ toRows }} of {{ total }}</p>
    <p>Page {{ page }}</p>
    <button
      :class="[
        'table-footer__btn',
        { 'table-footer__btn--disabled': !hasPrevPage },
      ]"
      :disabled="!hasPrevPage"
      @click="prevPage"
    >
      ᐸ
    </button>
    <button
      :class="[
        'table-footer__btn',
        { 'table-footer__btn--disabled': !hasNextPage },
      ]"
      :disabled="!hasNextPage"
      @click="nextPage"
    >
      ᐳ
    </button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    endIndex: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    nextPage() {
      this.$emit("next");
    },

    prevPage() {
      this.$emit("prev");
    },
  },

  computed: {
    hasNextPage() {
      return this.total > this.endIndex;
    },

    hasPrevPage() {
      return this.page > 1;
    },

    fromRows() {
      return this.toRows > 0 ? this.endIndex - this.perPage + 1 : 0;
    },

    toRows() {
      return this.endIndex <= this.total ? this.endIndex : this.total;
    },
  },
};
</script>

<style scoped>
.table-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.table-footer__btn {
  color: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
}

.table-footer__btn--disabled {
  opacity: 0.4;
}
</style>
