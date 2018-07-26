import Mock from 'mockjs'
import data from './data.json'

//返回轮播图接口
Mock.mock('/banner',{code:0,data:data.bannerList})
