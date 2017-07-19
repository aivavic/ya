/**
 * Created by viktor on 30.06.2017.
 */
import * as types from '../mutation-types'
import axios from 'axios'
import router from '../../router'
import cookie from 'vue-cookie'
const base64 = require('base-64')
const qs = require('qs')
// initial state
const state = {
  user_data: [],
  error: [],
  status: false,
  token: ''
}

// getters
const getters = {
  getSignUpUserInfo: state => state.user_data,
  getError: state => state.error,
  getStatus: state => state.status
}

// actions
const actions = {
  signUp ({ commit, rootState }, payload) {
    commit(types.START_SPINNER)
    let data = qs.stringify(payload)
    axios.post('http://api.yan.yii/user/sign-up', 'data=' + base64.encode(data))
      .then(response => {
        console.log(response)
        let user = response.data
        commit(types.SIGNUP_USER, { user })
        commit(types.STOP_SPINNER)
      })
      .catch(e => {
        commit(types.SIGNUP_ERROR, { e })
        commit(types.STOP_SPINNER)
      })
  },
  signIn ({ commit }, payload) {
    commit(types.START_SPINNER)
    console.log(payload)
    let data = qs.stringify(payload)
    console.log(data)
    axios.post('http://api.yan.yii/user/sign-in', 'data=' + base64.encode(data))
      .then(response => {
        console.log(response)
        let user = response.data
        let token = user.access_token
        commit(types.USER_TOKEN, { token })
        commit(types.USER_IDENTITY, { user })
        cookie.set('_token', token, 1)
        router.push({'path': '/'})
        commit(types.STOP_SPINNER)
      })
      .catch(e => {
        commit(types.SIGNUP_ERROR, { e })
        commit(types.STOP_SPINNER)
      })
  }
}

// mutations
const mutations = {
  [types.SIGNUP_USER] (state, { user }) {
    state.user_data = user
  },
  [types.SIGNUP_ERROR] (state, {error}) {
    state.error = error
  },
  [types.SIGNUP_STATUS] (state, {status}) {
    state.status = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
