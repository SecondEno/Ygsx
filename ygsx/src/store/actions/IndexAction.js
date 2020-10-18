// 封装的action方法
// 使用saga之后，这里不再调用数据处理的方法，与处理数据
// 可以直接返回type名称，然后sagas根据type来执行相关的操作
// 发送对象给到sagas

export const getSwiper= ()=>{
    return {
        type:'getSwiper'
    }
}
export const getMenu= ()=>{
    return {
        type:'getMenu'
    }
}
export const getFirstList= ()=>{
    return {
        type:'getFirstList'
    }
}

export const getMeatList= ()=>{
    return {
        type:'getMeatList',
        uri:'/api/meat',
        target:'setList',
        dataName:'meatList'
    }
}
export const getWineList= ()=>{
    return {
        type:'getWineList',
        uri:'/api/third',
        target:'setList',
        dataName:'wineList',
        num:0
    }
}
export const getFoodList= ()=>{
    return {
        type:'getFoodList',
        uri:'/api/third',
        target:'setList',
        dataName:'foodList',
        num:1
    }
}
export const getSnackList= ()=>{
    return {
        type:'getSnackList',
        uri:'/api/third',
        target:'setList',
        dataName:'snackList',
        num:2
    }
}
export const getCookieList= ()=>{
    return {
        type:'getCookieList',
        uri:'/api/third',
        target:'setList',
        dataName:'cookieList',
        num:3
    }
}