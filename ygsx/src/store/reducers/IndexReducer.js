// 设置默认数据源
// 使用immutable
import { fromJS } from 'immutable';

// 引入方法
import fruitMethod from '../methods/fruitMethod';

const defaultState = fromJS(
    {
        //图片滑块的数据
        swiper:[],
        // 菜单栏目数据
        menu:[],
        // firstlist数据
        firstList:[],
        // 肉类的数据
        meatList:[],
        // 酒类的数据
        wineList:[],
        // 粮油调味
        foodList:[],
        // 休闲食品
        snackList:[],
        // 烘焙糕点
        cookieList:[]
    }
)

export default ( state=defaultState, action)=>{
    try{
        return fruitMethod[action.type](state, action )
    }catch(e){
        return state
    }
}