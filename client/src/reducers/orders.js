import {
  FETCH_ORDERS
} from '../actions/initial.js'

const orders = (state = {data: {}}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, data: action.data }
    default:
      return state
  }
}

export default orders
