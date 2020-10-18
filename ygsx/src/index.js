import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 引入store
import store from './store/index'

import { Provider } from 'react-redux'

// 路由
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* exact */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)