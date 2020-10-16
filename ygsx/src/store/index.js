import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import userReducer from './reducers/userReducer'

// saga中间件
import createSagaMiddleware from 'redux-saga'
// saga异步处理
import sagas from './sagas'
// 实例化saga中间件
const sagaMiddleware = createSagaMiddleware()

// 合并reducer
const reducer = combineReducers({
  user: userReducer
})


// chrome调用所用
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  reducer,
  enhancer
)

// 运行saga  运行的代码顺序和创建仓库代码顺序不能错
sagaMiddleware.run(sagas)

export default store