// saga用法
// put相当于dispatch
// tabkeEvery监听组件发过来的action
import { put, takeEvery } from 'redux-saga/effects'

// 异步操作区域
import indexModel  from '../models/indexModel'

// sage必须是一个generator函数


function* getSwiper(action){
    // 异步处理
    // 请求到数据
    let ret = yield indexModel.getSwiperData()

    yield put({
        type:'setSwiper',
        payload: ret 
    })
}

function* getMenu(action){
    // 异步处理
    // 请求到数据
    let ret = yield indexModel.getMenuData()
    yield put({
        type:'setMenu',
        payload: ret 
    })
}

function* getFirstList(action){
    // 异步处理
    // 请求到数据
    let ret = yield indexModel.getFirstListData()
    yield put({
        type:'setFirstList',
        payload: ret 
    })
}


function* getList(action){
    // 异步处理
    // 请求到数据
    let ret = yield indexModel.getListData( action.uri , action.num )
    yield put({
        type:action.target,
        payload: ret,
        optData:action.dataName,
    })
}





// asyncHandler这个是第一步的函数方法
/**
 * 通过yield来实现takeEvery
 */
function* asyncHandler(){
/**
 * @param1 传递过来的type名称
 * @param2 处理方法，纯函数
 */
    yield takeEvery('getSwiper', getSwiper )
    yield takeEvery('getMenu', getMenu )
    yield takeEvery('getFirstList', getFirstList )
    yield takeEvery('getMeatList', getList )
    yield takeEvery('getWineList', getList )
    yield takeEvery('getFoodList', getList )
    yield takeEvery('getSnackList', getList )
    yield takeEvery('getCookieList', getList )
    
}

export default asyncHandler