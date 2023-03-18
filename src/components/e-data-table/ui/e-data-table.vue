<script lang="jsx">
import ETable from "./e-table/e-table.vue";
import ETableColumn from "./e-table-column/e-table-column.vue";
import ETableFooter from "./e-table-footer/e-table-footer.vue";
import cls from "./e-data-table.module.css";
export default {
  components: { ETableColumn, ETable, ETableFooter },

  props: {
    rows: {
      type: Array,
      required: true,
    },
    head: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: "Loading... Please wait",
    },
    noDataText: {
      type: String,
      default: "No data available",
    },
  },

  data() {
    return {
      currentPage: 1,
      sortKey: {
        name: null,
        reverse: false,
      },
      initRows: null,
    };
  },

  computed: {
    startIndex() {
      return (this.currentPage - 1) * this.perPage;
    },

    endIndex() {
      return this.currentPage * this.perPage;
    },

    sortRows() {
      const rows = [...this.rows];
      if (this.sortKey.name && !this.sortKey.reverse) {
        const currentColumn = this.head.filter(
          (i) => i.prop === this.sortKey.name
        )[0];
        return rows.sort(currentColumn.sort);
      }
      if (this.sortKey.name && this.sortKey.reverse) {
        const currentColumn = this.head.filter(
          (i) => i.prop === this.sortKey.name
        )[0];
        return rows.sort(currentColumn.sort).reverse();
      }
      return this.rows;
    },

    paginatedRows() {
      return this?.sortRows?.slice(this.startIndex, this.endIndex);
    },
  },

  methods: {
    renderTableColumn() {
      const scopedSlots = Object.assign({}, this.$vnode.data.scopedSlots);
      return this.head.map((t, index) => {
        return (
          <e-table-column
            prop={t.prop}
            title={t.title}
            key={index}
            sortable={t.sortable ?? true}
            scopedSlots={
              Object.hasOwn(scopedSlots, t.prop)
                ? { body: scopedSlots[t.prop] }
                : {}
            }
          ></e-table-column>
        );
      });
    },

    nextPage() {
      this.currentPage += 1;
    },

    prevPage() {
      this.currentPage -= 1;
    },

    sort(prop) {
      this.currentPage = 1;
      if (prop === this.sortKey.name && !this.sortKey.reverse) {
        this.sortKey.reverse = true;
        return;
      }
      if (prop === this.sortKey.name && this.sortKey.reverse) {
        this.sortKey.reverse = false;
        this.sortKey.name = null;
        return;
      }
      this.sortKey.reverse = false;
      this.sortKey.name = prop;
    },
  },

  render() {
    const column = this.renderTableColumn();
    return (
      <div class={cls.EDataTable}>
        <e-table
          rows={this.paginatedRows}
          onSort={(prop) => this.sort(prop)}
          sortKey={this.sortKey}
          loading={this.loading}
        >
          {...column}
        </e-table>
        <e-table-footer
          total={this.rows.length}
          page={this.currentPage}
          per-page={this.perPage}
          onPrev={this.prevPage}
          onNext={this.nextPage}
          endIndex={this.endIndex}
        />
      </div>
    );
  },
};
</script>
