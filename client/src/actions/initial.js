import { fetchOrders, fetchBalances, fetchTx, fetchCryptos } from '../api/initial.js'

export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_BALANCES = 'FETCH_BALANCES'
export const FETCH_TX = 'FETCH_TX'
export const FETCH_CRYPTS = 'FETCH_CRYPTS'

export const getInitialOrdersData = () => {
  return dispatch => {
    return fetchOrders()
    .then(res => {
      dispatch({
        type: FETCH_ORDERS,
        data: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }
}

export const getInitialBalancesData = () => {
  return dispatch => {
    return fetchBalances()
    .then(res => {
      dispatch({
        type: FETCH_BALANCES,
        data: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }
}

export const getInitialTxData = () => {
  return dispatch => {
    return fetchTx()
    .then(res => {
      dispatch({
        type: FETCH_TX,
        data: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }
}

export const getCryptoCurrencyData = () => {
  return dispatch => {
    return fetchCryptos()
    .then(res => {
      dispatch({
        type: FETCH_CRYPTS,
        data: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }
}
