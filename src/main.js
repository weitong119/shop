import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//rem组件和样式重置组件想在首页App.vue中使用，必须先引入main.js文件，在挂载到ID=app因为要使用就得挂载要是使用组件的地方

Vue.config.productionTip = false
//import '@/assets/css/rest.css'

//vant的完全引 入
//import Vant from 'vant';
//import 'vant/lib/index.css';
// Vue.use(Vant);
import {Button,NavBar,Icon} from 'vant'
Vue.use(Button).use(NavBar).use(Icon)

new Vue({//下面就是把组件挂载到id=app上
  router,
  store,
  render: h => h(App) 
}).$mount('#app')
