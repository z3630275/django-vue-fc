<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide box1"><img  src="./images/top_hero_hakko.jpg"></div>
        <div class="swiper-slide box2" ><img  src="./images/top_hero_karadacalpis_im02.jpg"></div>
        <div class="swiper-slide box3"><img   src="./images/top_main_bg01.jpg"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
     <!--<div class="swiper-scrollbar"></div>-->
</div>


</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted() {
      this.$store.dispatch('getBanner');
    },
    computed: {
      ...mapState(['bannerList'])
    },
    watch: {
      bannerList(value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay: 1000,
            speed: 100,
            // 如果需要滚动条
//         scrollbar: '.swiper-scrollbar',
            effect: 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflow: {
              rotate: 30,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows: true
            }
          })

        })
      }
    }

  }
</script>

<style scoped>
 .swiper-container {
            width: 600px;
            height: 300px;
        }
        .swiper-slide{
            width: 600px;
            height: 300px;
        }
        .swiper-slide img{
            width: 100%;
            height: 100%;
        }
</style>
