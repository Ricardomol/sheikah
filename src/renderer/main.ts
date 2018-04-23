import Vue from "vue"

import App from "./App.vue"
import router from "./router"

if (!process.env.IS_WEB) {
  Vue.use(require("vue-electron"))
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: "<App/>"
}).$mount("#app")