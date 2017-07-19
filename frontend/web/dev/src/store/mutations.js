/**
 * Created by viktor on 30.06.2017.
 */
import * as types from './mutation-types'

export default {
  [types.START_SPINNER] (state) {
    state.spinner = true
  },
  [types.STOP_SPINNER] (state) {
    state.spinner = false
  },
  [types.USER_TOKEN] (state, {token}) {
    state.user_state.token = token
  },
  [types.USER_IDENTITY] (state, {user}) {
    state.user_state.identity.id = user.id
    state.user_state.identity.email = user.email
    state.user_state.identity.username = user.username
  }
}
