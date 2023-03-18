<script lang="jsx">
import cls from "./e-select.module.scss";
export default {
  props: {
    id: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "",
    },

    invalid: {
      type: Boolean,
      default: false,
    },

    list: {
      type: Array,
      default: () => [],
    },

    nameKey: {
      type: String,
      default: "name",
    },

    valueKey: {
      type: String,
      default: "value",
    },

    defaultValue: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      focused: false,
      isDropdownOpen: false,
      selectedItem: {},
      value: "",
    };
  },
  computed: {
    filteredList() {
      return this.list.filter((item) => {
        return item[this.nameKey]
          .toLowerCase()
          .includes(this.value.toLowerCase());
      });
    },

    mainClasses() {
      return this.focused
        ? `${cls.ESelect} ${cls.ESelectFocused}`
        : cls.ESelect;
    },

    inputClasses() {
      return this.isDropdownOpen
        ? `${cls.ESelect__inputWrapper} ${cls.ESelect__inputWrapperOpen}`
        : cls.ESelect__inputWrapper;
    },

    getPlaceholder() {
      if (!this.selectedItem[this.valueKey]) {
        return this.placeholder;
      }
      return "";
    },
  },

  watch: {
    selectedItem() {
      this.$emit("selected", this.selectedItem);
    },
  },

  created() {
    if (this.defaultValue) {
      const defaultValue = this.list.find(
        (item) => item[this.valueKey] === this.defaultValue
      );
      this.selectedItem = defaultValue ?? {};
    }
  },

  methods: {
    focusHandler() {
      this.focused = true;
      this.isDropdownOpen = true;
    },

    blurHandler() {
      this.focused = false;
    },

    hideDropdown() {
      this.isDropdownOpen = false;
      this.value = "";
    },

    selectFirstItemInList() {
      if (this.filteredList.length > 0) {
        this.onItemClick(this.filteredList[0]);
        this.blurHandler();
      } else {
        this.hideDropdown();
      }
    },

    inputKeyUpHandler(e) {
      if (e.keyCode === 13) {
        this.selectFirstItemInList();
      }
    },

    nameKeyUpHandler(e, item) {
      if (e.keyCode === 13) {
        this.onItemClick(item);
      }
    },

    emptyItemKeyUpHandler(e) {
      if (e.keyCode === 13) {
        this.hideDropdown();
      }
    },

    inputHandler(e) {
      this.value = e.target.value;
      this.$emit("input", this.value);
    },
    onItemClick(item) {
      this.selectedItem = item;
      this.isDropdownOpen = false;
      this.value = "";
    },

    itemClasses(item) {
      if (this.selectedItem[this.nameKey] === item[this.nameKey]) {
        return cls.ESelect__selectedItem;
      }
      return "";
    },

    renderItem(item) {
      const slots = this.$vnode.data.scopedSlots;
      if (Object.hasOwn(slots, "default")) {
        return slots.default({ item });
      }
      return <span> {item[this.nameKey]}</span>;
    },

    renderList() {
      return this.filteredList.map((item) => {
        const itemTemplate = this.renderItem(item);
        return (
          <li
            key={item.value}
            tabIndex="0"
            onClick={() => this.onItemClick(item)}
            onKeyup={(e) => this.nameKeyUpHandler(e, item)}
            class={this.itemClasses(item)}
          >
            {itemTemplate}
          </li>
        );
      });
    },
  },
  render() {
    const items = this.renderList();
    const selectedItem = this.renderItem(this.selectedItem);
    return (
      <div vClickOutside={this.hideDropdown} class={this.mainClasses}>
        {this.label && (
          <label for={this.id} class={cls.ESelect__label}>
            {this.label}
          </label>
        )}
        <div class={this.inputClasses} onClick={this.focusHandler}>
          <div class={cls.selectItem}>{selectedItem}</div>
          <input
            id={this.id}
            class={cls.ESelect__input}
            value={this.value}
            onInput={this.inputHandler}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
            onKeyup={this.inputKeyUpHandler}
            placeholder={this.getPlaceholder}
          />
          {this.invalid && <p class={cls.invalidText}>Required field</p>}
        </div>
        {this.isDropdownOpen && (
          <div class={cls.ESelect___list}>
            <ul>
              {...items}
              {!this.filteredList.length && (
                <li
                  onClick={this.hideDropdown}
                  onKeyup={this.emptyItemKeyUpHandler}
                  class={cls.empty}
                  tabIndex="0"
                >
                  Nothing found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  },
};
</script>
