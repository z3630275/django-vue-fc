import {RECEIVE_BANNER} from './mutation-types'

export default {
  [RECEIVE_BANNER](state,{banners}){
    state.bannerList = banners
  }}
