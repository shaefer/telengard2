import { combineReducers } from 'redux'
import Config from '../models/Config'

const config = (state = Config, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config
})

export default rootReducer
