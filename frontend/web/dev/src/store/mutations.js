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
  }
}
