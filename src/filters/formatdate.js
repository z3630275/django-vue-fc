import format from 'date-fns/format'
import Vue from 'vue'

Vue.filter('dateString',function (value,formatStr) {
  return format(value,formatStr||"YYYY年MM月DD日  星期d")
})

