//数据处理层
// 这里通过调用请求方法，获得数据，并对数据进行一定的处理
// 然后将处理完成的数据给到调用其方法的sagas函数

// 在这里定义成一个类，这样可以直接让其继承请求的方法
// 引入请求方法的类
import Request from '../http/Request'

// 引入网络请求的配置地址
import {
    DETAILURI
} from '../config/uri'

class DetailModel extends Request {
    /**
     * 获取详情页数据
     * @param 无参数
     */
    async getDetailData(code=0){
        let ret = await this.post( DETAILURI, code )
        ret = ret.data.Data.CommodityInfo
        return ret
    }

}
export default new DetailModel