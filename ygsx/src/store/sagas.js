// put 相当于dispatch
// takeEvery 监听组件发过来的action
import { put, takeEvery } from 'redux-saga/effects'
// 异步操作区域

import axios from 'axios'

// 添加用户
function* fetchAddUser(action) {
  // 异步处理
  let ret = yield axios.get('/data.json')
  // 发起dispatch 给reducer
  yield put({
    type: 'bindAddUser',
    payload: ret.data
  })
}

function* fetchLogin(action) {
  // 向本地存储一份，用于用户刷新后有数据
  yield sessionStorage.setItem('token', 'mytoken')
  
  yield put({
    type: 'bindLogin',
    payload: 'mytoken'
  })
}



function* asyncHandler() {
  // 参1 操作type名称
  // 参2 处理方法 纯函数
  yield takeEvery("addUser", fetchAddUser);
  // 登录
  yield takeEvery("login", fetchLogin);
}

export default asyncHandler