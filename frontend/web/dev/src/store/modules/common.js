/**
 * Created by viktor on 30.06.2017.
 */
import * as types from '../mutation-types'

// initial state
const state = {
	all: []
}

// getters
const getters = {
	allArticles: state => state.all
}

// actions
const actions = {
	getAllProducts ({ commit }) {
		shop.getProducts(articles => {
			commit(types.RECEIVE_ARTICLES, { articles })
		})
	}
}

// mutations
const mutations = {
	[types.RECEIVE_ARTICLES] (state, { articles }) {
		state.all = articles
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}