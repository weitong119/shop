<template>
  <div id="app">
    <router-view></router-view> 
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/home">首页</router-link><!--意思为点击“首页”后切换到路径为/home所设置的组件上（router.js里设置的），to="路径"-->
        </li>
      <li class="footer-bar-item">
         <router-link to="/category">分类</router-link><!--//也可以说成点击分类把地址栏里加入了/category，找到了路由,之后进行了（router.js里的操作）-->
      </li>
      <li  class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
        </li>
      <li  class="footer-bar-item">
        <router-link to="/profile">我的 </router-link>
        </li>
    </ul>
 

  </div>
   
</template>

<style lang="scss">
.footer-bar{
  margin: 0;
  padding: 0;
 
}
.footer-bar{
  display: flex;//给父元素添加它可变成弹性盒模型
  background: #504e4e;
  position: fixed;//给父元素固定定位让其固定在阅览器窗口的某个位置，不管怎么滚动都在窗口的某个位置
  bottom: 0;//定位到最底部，但因为是固定定位，他会脱离文档流，空间释放，子元素的字又不居中了 
  width: 100%;//给父元素增加宽度，让其充满屏幕，便可以解决固定定位的空间释放（也有自适应移动端屏幕大小的功能）
   height: 1rem;//1rem,是按照组件的代码设计出1rem占屏幕的大小，并把屏幕分成几rem(前提是把rem.js组件引入main。js并挂载到app下)，把rem当成单位即可，填写 几rem，这样父元素的高度便可以随屏幕大小变化
   line-height: 1rem;//行高的意思，也是行间距的意思，行高跟高一样，这样子字就垂直居中了
   &-item{//选中前缀跟父元素一样后缀为它的元素
    flex-grow: 1;//让每个选中的元素平均分等份在一行中
    text-align: center;//让每个元素都居中
    align-items: center;

  }
}

</style>
