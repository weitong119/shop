import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//rem组件和样式重置组件想在首页App.vue中使用，必须先引入main.js文件，在挂载到ID=app因为要使用就得挂载要是使用组件的地方

Vue.config.productionTip = false
//import '@/assets/css/rest.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
