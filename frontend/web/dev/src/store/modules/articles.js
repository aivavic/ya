/**
 * Created by viktor on 30.06.2017.
 */
import * as types from '../mutation-types'
import axios from 'axios'
// const qs = require('qs')
// initial state
const state = {
  articles: [],
  article: {
    image: 'loading'
  }
}

// getters
const getters = {
  allArticles: state => state.articles,
  getArticleBySlug: state => state.article
}

// actions
const actions = {
  getAllProducts ({ commit, rootState }) {
    // var config = {
    //   headers: {'Authorization': 'Bearer f9xur5jTWQ3YHVoKXh15dzc5U1PI9h6EjJOlGd7Tn'}
    // }
    console.log(axios.defaults.headers)
    axios.defaults.headers['Authorization'] = 'Bearer f9xur5jTWQ3YHVoKXh15dzc5U1PI9h6EjJOlGd7Tn'
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    // axios.defaults.headers.common['Test'] = 'test'
    axios.get(rootState.apiUrl + `/article/test`)
      .then(response => {
        var articles = response.data
        commit(types.RECEIVE_ARTICLES, { articles })
        commit(types.STOP_SPINNER)
      })
      .catch(e => {
        console.log(e)
      })
  },
  getArticleBySlug ({ commit, rootState }, payload) {
    axios.get(rootState.apiUrl + `/post/` + payload)
      .then(response => {
        var article = response.data
        commit(types.RECEIVE_ARTICLE_BY_SLUG, { article })
        commit(types.STOP_SPINNER)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_ARTICLES] (state, { articles }) {
    state.articles = articles
  },
  [types.RECEIVE_ARTICLE_BY_SLUG] (state, {article}) {
    state.article = article
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
