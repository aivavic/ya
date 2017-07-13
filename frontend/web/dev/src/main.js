// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$apiBaseUrl = 'http://127.0.0.1:8000'
//  Vue.prototype.$apiBaseUrl = 'http://backend.youniq-animation.pp.ua'

Vue.use(VueLodash, lodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
