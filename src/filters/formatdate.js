import format from 'date-fns/format'
import Vue from 'vue'


import zh_cn from 'date-fns/locale/zh_cn'
Vue.filter('dateString',function (value,formatStr) {
  return format(value,formatStr||"YYYY年MM月DD日  星期dd",{locale:zh_cn})
})

