
// 首页涉及到的方法
// 引入immutable
import { fromJS }  from 'immutable'

// 方法最终返回的也是state
export default {
    setSwiper( state, action ){
        // console.log( action.payload )
        // js转为immutable对象
        let data = fromJS( action.payload)
        // 此处为追加数据的处理，注意此时的state为immutable对象，需要使用专门的方法
        state = state.setIn(['swiper'], fromJS([]))
        return state.updateIn(['swiper'], item=> item.concat(data))
    },

    // 设置menu数据
    setMenu( state, action ){
        // console.log( action.payload )
        // js转为immutable对象
        let data = fromJS( action.payload)
        // 此处为追加数据的处理，注意此时的state为immutable对象，需要使用专门的方法
        state = state.setIn(['menu'], fromJS([]))
        return state.updateIn(['menu'], item=> item.concat(data))
    },

    // 设置firstlist数据
    setFirstList( state, action ){
        // console.log( action.payload )
        // js转为immutable对象
        let data = fromJS( action.payload)
        // 此处为追加数据的处理，注意此时的state为immutable对象，需要使用专门的方法
        state = state.setIn(['firstList'], fromJS([]))
        return state.updateIn(['firstList'], item=> item.concat(data))
    },

    // 设置meatList数据
    setList( state, action ){
        // console.log( action.payload )
        // js转为immutable对象
        let data = fromJS( action.payload)
        // 此处为追加数据的处理，注意此时的state为immutable对象，需要使用专门的方法
        return state.updateIn([action.optData], item=> item.concat(data))
    }
    
}