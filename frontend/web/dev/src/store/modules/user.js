/**
 * Created by viktor on 30.06.2017.
 */
import * as types from '../mutation-types'
import axios from 'axios'
// initial state
const state = {
  user: [],
  error: []
}

// getters
const getters = {
  getSignUpUserInfo: state => state.user,
  getError: state => state.error
}

// actions
const actions = {
  signUp ({ commit, rootState }, payload) {
    commit(types.START_SPINNER)
    var config = {
      headers: {'Authorization': 'Bearer ' + this.id_token}
    }
    axios.post(rootState.apiUrl + `/register`, payload, config)
      .then(response => {
        var user = response.data
        commit(types.SIGNUP_USER, { user })
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
    state.user = user
  },
  [types.SIGNUP_ERROR] (state, {error}) {
    state.error = error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
