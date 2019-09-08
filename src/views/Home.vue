<template>
 <div>
  <van-nav-bar title="首页" class="nav-title">
      <van-icon name="cart" slot="right" ></van-icon>
      <van-icon name="search" slot="left" ></van-icon>

  </van-nav-bar>
  <!--轮播图 -->
  <div class="carousel"><!--设置了这个class就可以在style样式中找到他并给他设置css样式，用"."来找 ，Id用"#"来找-->
    <van-swipe :autoplay="3000"><!--:autoplay=""是指自动播放的时间，以毫秒为单位 -->
      <van-swipe-item class="carousel-item"  v-for="(item,index) in carouselItems" :key="index"><!--图片,v-for循环遍历谁就in谁，很显然要循环js里的三张图片 ,而且如果加v-for，就要加入：key=“index”表示唯一，不然会报错 -->
       <img :src="item.imgSrc" alt=""><!--这里是告诉你循环的是个图片，（因为是动态地址前面加：）地址为item下的imgSrc,并且v-lazy替换掉：src变成懒加载“这是懒加载的用法，先引入，再替换:src为v-lazy” -->
     </van-swipe-item><!--为什么起class名用上述方式 父carousel 子caroousel-item，因为到后面给子加样式时，父写carousel，子直接&-item即可找到，（便于Scss去CSS预处理）下边为例-->
    </van-swipe> 
  </div>
  <!--热门商品 -->
  <div class="hot">
      <p class="hot-title">热门商品</p><!--开头有个“热门商品”用p标签即可 -->
      <swiper class="hot-swipe"  :option="swiperOption" > <!--又用到了命名空间的命名方式父hot ，子hot-swipe, :option="swiperOption"加入他才能跟js中的swiperOption关联且将交互功能锁定在<swiper>身上> -->
               <swiper-slide  v-for="(item,index) in hotProducts" :key="index"><!--v-for循环遍历谁就in谁，很显然要循环js里的 ,而且如果加v-for，就要加入：key=“index”表示唯一，不然会报错 -->
               <div class="hot-swipe-content">
                   <img :src="item.img" alt="">;<!--循环的对象有item为循环上传的第一个参数即hotProducts数组下的所有对象的父元素对象,等明天有数据就好了 -->
                   <div>{{item.name}}</div><!-- {{}}在Vue中有调用括号里的东西，和插入括号里的东西的意思-->
                    <div>{{item.price}}</div><!--<div>{{item.？}}写几个这个，由你决定显示在页面信息有几个， 接下来写一些对应的样式-->
                   <div>{{item.city}} </div>
        
                  
               </div>
                  </swiper-slide>
      </swipe>
  </div>
 </div>
 
</template>

<script>
import 'swiper/dist/css/swiper.css'//前提是在命令行先安装 npm install vue-awesome-swiper --save
import { swiper, swiperSlide } from 'vue-awesome-swiper'//为什么用大括号{ swiper, swiperSlide }，因为这个组件库里对应着好多对象，用它代指（复习es6）
 
export default {//把三个轮播图里的items放在js里
    data(){
        return{
            carouselItems:[//把每个图片items对象，因为图片有各种属性，所以用对象最好，放在数组中，carouselItems为配套起的名
            {
                name:'img1',
                imgSrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
            },{
                name:'img2',
                 imgSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'

            },{
                name:'img3',
                imgSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
            }

            ],
            hotProducts[//一些写死的图片数据，需要上面调用插入，循环

            ],
            swiperOption:{//得跟父元素加上才能好使，因为<swiper>是包含这些模块的，也只有加在他身上才能控制视图中幻灯片的个数
                   slidesPerView:3//每个视图的幻灯片数量（幻灯片在滑块容器上同时可见）
            } 
  };   
    }, 
    components: {//如果想用到swiper,swiperSlide对象得用component去声明一下才能用，前提是上面引入了啊
    swiper,
    swiperSlide
  }
};
</script>


<style lang="scss">
.van-title{
    position:fixed;
    top:0;
    left:0;//意思为固定在左上处，又因为宽度撑开100%，所以固定在上边
    width:100%; //因为固定定位会脱离文档流空间释放所以要用100%给空间撑开
}
.carousel{
    margin-top: 1rem;//因为导航栏固定定位，空间释放，所以覆盖掉了一部分轮播图，给轮播图加一个上边距1rem，因为导航栏就1rem高
    height:200px;//这是定义轮播框的大小的（父元素），其实应该用rem来定义大小的但是文件还没引入，先写死后来再添加，因为rem（针对于HTMLfont-size来说的）是把屏幕分成几份，一份为1rem，可以做到自适应
    &-item{
        img{//给子元素图片加入宽高，达到自适应
             height:200px;//
             width:100%;
             
        }
       
    }
}
.hot{
    &-title{
        box-sizing: border-box;//变成怪异盒模型，pandding变成往里走了，不会影响导航栏的固定定位了，不会随着滚动条移动了
        width: 100%;
        height:0.5rem;
        padding-left:0.2rem;
        line-height: 0.5rem;
    }
    &-swiper{//包含所有模块
        &-content{//每个模块的内部设置
            width:2rem;
            text-align:center;//文字居中
            img{//现在所有模块水平分布了但一页只有一个，但可以往左划往右划动显示
                width:2rem;
                height: 2rem; 
            }

        }
    }
}
</style>

