/**
 * Created by viktor on 30.06.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import articles from './modules/articles'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    'apiUrl': 'http://api.yan.yii',
    'storageUrl': 'http://backend.youniq-animation.pp.ua/storage',
    'spinner': false,
    'user_state': {
      'identity': {
        'id': '',
        'username': '',
        'email': '',
        'fullname': '',
        'avatar': ''
      },
      'token': false
    }
  },
  actions,
  getters,
  mutations,
  modules: {
    articles,
    user
  },
  strict: debug
})
