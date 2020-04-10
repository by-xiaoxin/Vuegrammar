// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
//引入
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
// import App from './App.vue';

Vue.use(ElementUI);

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

import Huihui from '@/components/路由A.vue'
import Long from '@/components/路由B.vue'
// import Options from '@/new_file.vue'


Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: "/",
      component: Huihui
    },
    {
      path: "/B",
      component: Long
    }
  ]
})
// const store = new Vuex.Store({
//   state:{
//     num: 5
//   },
//   // 第二个状态
//   getters:{
//     changeNum(state){
//       return state.num + 2
//     }
//   },
//   //第三个状态
//   mutations: {
//     add(state){
//       return state.num++     // 先赋值;
//     },
//     del(state){
//       return state.num--
//     }
//   },
//   //第四个状态
//   actions: {
//     add(context) { // context上下文
//       context.commit("add")
//     },
//     del(context) {
//       context.commit("del")
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  echarts,
  store,
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
