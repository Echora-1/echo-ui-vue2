import Vue from "vue";
import App from "./App.vue";
import clickOutside from "./directives/vue-directive-clickOutside";
Vue.config.productionTip = false;

Vue.config.productionTip = false;

Vue.directive("click-outside", clickOutside);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
