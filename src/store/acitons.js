import {RECEIVE_BANNER} from './mutation-types'
import {reqBanner} from '../api'

export default {
  //获取异步轮播图
  async getBanner({commit}){
    //发送异步ajax请求
      const  result = await reqBanner()
      if(result.code===0){
        const banners = result.data
        commit(RECEIVE_BANNER,{banners})
      }
    //提交mutation

  }

}
