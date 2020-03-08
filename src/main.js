// 入口Js
import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //   引入路由器产生两个结果：1.多了几个组建标签，router-link,router-view，keep-alive；2.多了两个属性可以访问，$router,$route
  router
})
