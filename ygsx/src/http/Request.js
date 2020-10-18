import axios from 'axios'

// 数据请求
export default class Request {

  /**
   * get请求
   * @param {string} url 
   * @return Promise
   */
  get(url = '') {
    if (url === '') {
      return Promise.reject(new Error('有错了'))
    }
    return axios.get(url)
  }

  post(url = '') {
    if (url === '') {
      return Promise.reject(new Error('有错了'))
    }
    return axios.post(url, {
      Body: "",
      Head: {
        CityCode: "2",
        CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
        DeviceId: "4ba1b3f3a4edbaee8fe641eb028f6030",
        DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
        LoginToken: "giwI14o2Li3cYNK/TqJvOGEnLkF3EkUN3TljOlYiiLe1BNQNOnNxVuf8J/lkhptaplUsgquyx3wxVCLbj7rijsLlH5cmlbtY0CLCw/VtF3aXhIac3mm7Qx7vamOeYFdmuF+x6z+eA/6bvd+3YKd4GSb6FjrvK+A3Uy2cq+2pdx4=",
        MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      }
    }, {
      headers: { appName: 3000025 }
    })
  }
  /**
     * 
     * @param {string} uri 
     */
  getSwiper(uri = '') {
    if (uri === '') {
      return Promise.reject(new Error('有错了'))
    }
    return axios.get(uri)
  }

  /**
   * 
   * @param {string} uri 
   */
  getMenu(uri = '') {
    if (uri === '') {
      return Promise.reject(new Error('有错了'))
    }
    return axios.get(uri)
  }

  /**
  * 获取请求数据
  * @param {string} uri 
  */
  get(uri = '') {
    if (uri === '') {
      return Promise.reject(new Error('有错了'))
    }
    return axios.get(uri)
  }
  /**
   * 
   * @param {string} uri
   */

  post(uri = '', code) {
    if (uri === '') {
      return Promise.reject(new Error('有错了'))
    }
    let opts = {
      Body: { CommodityCode: code, CommodityId: "" },
      Head: {
        CityCode: "2",
        CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
        DeviceId: "da6cf7a06f4138fee4369dfe89f96547",
        DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
      }
    }
    let headers = {
      headers: { appName: 3000025 }
    }
    return axios.post(uri, opts, headers)
  }
  listpost(uri = '', code) {
    if (uri === '') {
      return Promise.reject(new Error('有错了'))
    }
    let opts = {
      Body: {
        CommodityCode: "",
        CommodityId: code,
        Keyword: "",
        PageIndex: 1,
        Sort: 4
      },
      Head: {
        CityCode: "2",
        CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
        DeviceId: "4ba1b3f3a4edbaee8fe641eb028f6030",
        DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
        LoginToken: "",
        MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        Token: ""
      }
    }
    let headers = {
      headers: { appName: 3000025 }
    }
    return axios.post(uri, opts, headers)
  }
}