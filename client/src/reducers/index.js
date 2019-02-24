import { combineReducers } from 'redux'
import orders from './orders.js'

const appReducer = combineReducers({
  orders
});

export default appReducer
