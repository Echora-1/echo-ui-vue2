<script>
export default {
  name: "e-table-column",
  props: {
    prop: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    sortable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
