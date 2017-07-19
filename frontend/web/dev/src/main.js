// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import store from './store'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(VueLodash, lodash)
Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  cookie: VueCookie,
  template: '<App/>',
  components: { App }
})
