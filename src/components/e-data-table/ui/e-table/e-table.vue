<script lang="jsx">
import cls from './e-table.module.css'
import ELoader from "../../../e-horizontal-loader/ui/e-horizontal-loader.vue";

export default {
  name: 'e-table',
  components: {ELoader},

  props: {
    rows: {
      type: Array,
      default: () => []
    },
    sortKey: {
      type: [Object, String],
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: 'Loading... Please wait'
    },
    noDataText: {
      type: String,
      default: 'No data available'
    }
  },

  data() {
    return {
     windowWidth: null,
    }
  },


  created() {
    window.addEventListener("resize", this.setWindowWidth);
  },

  mounted() {
    this.windowWidth = window.innerWidth
  },

  destroyed() {
    window.removeEventListener("resize", this.setWindowWidth);
  },

  computed: {
    noData() {
      return !this.loading && !this.rows.length
    },

    initData() {
      return !this.loading && !!this.rows.length

    },

    windowWidthIsMobile() {
      return this.windowWidth <= 767
    }
  },

  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth
    },

    sortColum(prop) {
      this.$emit('sort', prop)
    },

    renderHead(h, columnsOptions) {
      if(this.windowWidthIsMobile) {
        return  []
      }
      return columnsOptions.map((column) => {
        const renderedTitle = column.scopedSlots.title ? column.scopedSlots.title() : column.title
        return (
            <th key={column.prop} class={cls.eTable__Th} onClick={() => this.sortColum(column.prop)}>
              {renderedTitle}  {column.sortable && <button  class={this.sortBtnClass(column.prop)} >{this.sortKey.name === column.prop && !this.sortKey.reverse ? '▼' :  '▲'}</button>}
            </th>
        );
      });
    },

    sortBtnClass(name) {
      return this.sortKey.name === name ?  cls.eTable__ThSortBtnActive : cls.eTable__ThSortBtn
    },

    renderColumns(h, row, columnsOptions) {
      return columnsOptions.map ((column) => {
        console.log(  )
            const body = column.scopedSlots.body ? column.scopedSlots.body({ row }) : row[column.prop]
            if(this.windowWidthIsMobile) {
              return (
                  <td key={column.prop} class={cls.eTable__Td}>
                    <div style="font-weight: bold;">
                      {column.prop}
                    </div>
                    <div>
                      {body}
                    </div>
                  </td>
              )
            }
              return (
            <td key={column.prop} class={cls.eTable__Td}>
              <div>
                {body}
              </div>
            </td>
        )
      })
    },
    renderRows(h, columnsOptions) {
      return this.rows.map((row, index) => {
        return <tr key={row.id || index} class={cls.eTable__Tr}>{...this.renderColumns(h, row, columnsOptions)}</tr>
      });
    },

    renderLoadingLoader() {
      return (
          <thead style="position: relative;">
          <tr style="height: 44px">
            <th>
              <div class={cls.loadingWrap}>
                <e-loader />
                <div class={cls.loadingText}>{this.loadingText}</div>
              </div>
            </th>
          </tr>
          </thead>
      )
    },

    renderNoDataText() {
      return (
          <thead style="position: relative;">
          <tr style="height: 44px">
            <th>
              <div class={cls.noDataWrap}>
                <div class={cls.noDataText}>{this.noDataText}</div>
              </div>
            </th>
          </tr>
          </thead>
      )
    },

    getColumnOptions() {
      return this.$slots.default.
        filter(item => item.componentOptions && item.componentOptions.tag === 'e-table-column').
        map(column =>
          Object.assign({}, column.componentOptions.propsData, {
            scopedSlots: column.data.scopedSlots || {}
          }
        )
      );
    }
  },

  render(h) {
    const columnsOptions = this.getColumnOptions();
    const columnsHead = this.renderHead(h, columnsOptions);
    const rows = this.renderRows(h, columnsOptions);
    const loader = this.renderLoadingLoader()
    const noDataText = this.renderNoDataText()

    return (
        <table class={cls.eTable}>
          <thead>{...columnsHead}</thead>
          {this.loading && loader}
          {this.noData && noDataText}
          {this.initData &&
              <tbody>
                <tr aria-hidden="true" style="height: 6px"></tr>
                {...rows}
              </tbody>
          }
        </table>
    );
  }
};
</script>


