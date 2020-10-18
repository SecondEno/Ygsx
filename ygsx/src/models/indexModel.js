//数据处理层
// 这里通过调用请求方法，获得数据，并对数据进行一定的处理
// 然后将处理完成的数据给到调用其方法的sagas函数

// 在这里定义成一个类，这样可以直接让其继承请求的方法
// 引入请求方法的类
import Request from '../http/Request'

// 引入网络请求的配置地址
import {
    SWIPERURI,
    MENUURI,
    FIRSTURI,
    DETAILURI
} from '../config/uri'

class IndexModel extends Request {

    // 获取swiper的数据
    /**
     * 
     * @param 无参数
     */
    async getSwiperData(){
        let ret = await this.getSwiper(SWIPERURI)
        return ret.data.data
    }
    
    // 获取menu的数据
    /**
     * @param 无参数
     */
    async getMenuData(){
        let ret = await this.get(MENUURI)
        ret = ret.data.data.map( item => ({
            'icon':item.img,
            'text':item.title
        }))
        // console.log(ret)
        return ret
    }
    
    /**
     * 获取首页的列表数据
     * @param 无参数
     */
    async getFirstListData(uri=FIRSTURI){
        let ret = await this.get(uri)
        ret = ret.data.Data.templateComponentList[1].commoditysComponentList
        return ret
    }

    /**
     * 获取首页的列表数据
     * @param 无参数
     */
    async getListData(uri=FIRSTURI,num=0){
        let ret = await this.get(uri)

        ret = ret.data.Data.templateComponentList[num].commoditysComponentList
        return ret
    }




}
export default new IndexModel