<script lang="jsx">
import cls from "./e-tabs.module.css";
export default {
  data() {
    return {
      value: 0,
      renderedTab: [],
      options: null,
    };
  },

  created() {
    this.options = this.getTabsOptions();
    this.renderedTab.push(
      this.options.tabItem.find((t) => t.index === this.value)
    );
  },

  watch: {
    value() {
      if (!this.renderedTab.find((t) => t.index === this.value)) {
        this.renderedTab.push(
          this.options.tabItem.find((t) => t.index === this.value)
        );
      }
    },
  },

  methods: {
    getTabsOptions() {
      let tabIndex = 0;
      let tabItemIndex = 0;
      return this.$slots.default.reduce(
        (options, node) => {
          const nodeTag = node.componentOptions.tag;
          if (nodeTag === "e-tab") {
            options.tab.push({
              children: node.componentOptions.children[0],
              index: tabIndex,
            });
            tabIndex++;
          }
          if (nodeTag === "e-tab-item") {
            options.tabItem.push({
              children: node.componentOptions.children[0],
              index: tabItemIndex,
            });
            tabItemIndex++;
          }
          return options;
        },
        { tab: [], tabItem: [] }
      );
    },

    selectTab(index) {
      this.value = index;
      this.$emit("input", this.value);
    },

    renderTab(tabs) {
      return tabs.map((tab) => {
        return (
          <button
            key={tab.index}
            class={this.tabClass(tab.index)}
            onClick={() => this.selectTab(tab.index)}
          >
            {tab.children}
          </button>
        );
      });
    },

    renderTabItem(tabItems) {
      return tabItems.map((tabItem) => (
        <div key={tabItem.index} class={this.tabItemClass(tabItem.index)}>
          {tabItem.children}
        </div>
      ));
    },

    tabClass(index) {
      return index === this.value ? cls.tabActive : cls.tab;
    },

    tabItemClass(index) {
      return index === this.value ? cls.tabItemActive : cls.tabItem;
    },
  },

  render() {
    const tab = this.renderTab(this.options.tab);
    const tabItem = this.renderTabItem(this.renderedTab);
    return (
      <div>
        <div class={cls.tabWrapper}>{...tab}</div>
        <div class={cls.tabItemWrapper}>{...tabItem}</div>
      </div>
    );
  },
};
</script>
