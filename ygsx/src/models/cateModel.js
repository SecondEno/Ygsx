import Request from '../http/Request'
import {
  CATEGROY
} from '../config/uri'

// 数据模型，获取数据和数据处理
class Model extends Request {

  getCate(){
    return this.post(CATEGROY)
  }

}

export default new Model