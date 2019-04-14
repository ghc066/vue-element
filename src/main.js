import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import ElemUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App'

Vue.config.productionTip = false
Vue.use(ElemUi)
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
