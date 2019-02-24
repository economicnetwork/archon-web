import { baseURL } from '../constants/common.js'
import axios from 'axios'

export const fetchOrders = () => {
  return axios({
    url: baseURL + '/api/orders',
    Accept: 'application/json',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  })
  .then(response => {
    return Promise.resolve(response)
  })
  .catch(error => {
    return Promise.reject(error)
  })
}

export const fetchBalances = () => {
  return axios({
    url: baseURL + '/api/balance',
    Accept: 'application/json',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  })
  .then(response => {
    return Promise.resolve(response)
  })
  .catch(error => {
    return Promise.reject(error)
  })
}

export const fetchCryptos = () => {
  return axios({
    url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,XRP,LTC,DASH,XEM&tsyms=USD',
    Accept: 'application/json',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  })
  .then(response => {
    return Promise.resolve(response)
  })
  .catch(error => {
    return Promise.reject(error)
  })
}
