import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import reducers from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk, loggerMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
