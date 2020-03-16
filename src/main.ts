import Vue from "vue";
import Toasted from "vue-toasted";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/global.scss";

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.use(Toasted);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
