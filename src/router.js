import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'//要想使用就要导入进这个文件中，如果下面有引用，还需要像这样起名字例Home，这样可代指Home.vue文件
import Cart from './views/Cart.vue'//作用同上
import Category from './views/Category.vue'//作用同上
import Profile from './views/Profile.vue'//作用同上

Vue.use(Router)

export default new Router({
  routes: [//它是一个导航，是个数组[]数组中可以写着导航用的对象
    {
      path: '/',//以，逗号结尾，意思为当地址栏中输入#/这个路径时会导航到views下的组件Home.vue中，并因为<router-view>在App.vue中的html占位了，所以可以显示在页面中

      name: 'home',
      component: Home//这里导航到哪个组件的意思(Home为上面你给Home.vue这个文件起的名字)（如果想引用组件，就要像上面先导入这个组件）
    },{//加一个，{}就可以接着写别的组件的导航
    path:'/profile',
    name: 'profile',
    component:Profile
  
    },{
      path:'/cart',//（名字和路径首字母不用大写，组件首字母要大写）
      name: 'cart',
      component:Cart
    },{
      path:'/category',
      name: 'category',
      component:Category
    }
  ]
})
