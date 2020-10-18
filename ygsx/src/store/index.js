//所有的数据统一存储在redux中，
// index.js是redux的入口文件

// 集成redux-immutable，引入
import { combineReducers } from 'redux-immutable'
import { createStore , applyMiddleware, compose } from 'redux'

//异步请求中间件

// saga中间件
import createSagaMiddleware from 'redux-saga'

// saga异步处理
import sagas from './sagas'

// 实例化saga中间件
const sagaMiddleware = createSagaMiddleware()

// 导入reducer
import fruit from './reducers/IndexReducer'

// 合并reducer
const reducer = combineReducers({
  fruit
})


// 配置chrome中的redux扩展可视化操作
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  // 注册中间件
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  reducer,
  enhancer
)

// 运行saga  运行的代码顺序和创建仓库代码顺序不能错
sagaMiddleware.run(sagas)

export default store