<template>
  <div>
    <div id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index"><img :src="item.url"/></div>

        </div>
      </div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="module">
      <div class="module1">
        <div class="left">
          <!--<img src="./images/module3_1.jpg" alt="">-->
          <p class="fisrt_word">营销活动</p>
          <a class="more" href="">更多营销活动>></a>
        </div>
        <div class="right">
          <ul class="group_list_nav">
            <li @mouseover="current='coming'" :class="{active:current=='coming'}"><a href="#">即将开展</a></li>
            <li @mouseover="current='going'" :class="{active:current=='going'}"><a href="#">正在进行</a></li>
            <li @mouseover="current='completed'" :class="{active:current=='completed'}"><a href="#">已经完成</a></li>
          </ul>
          <ul group_list_content>
            <li v-show="current==='coming'"></li>
            <li v-show="current==='going'">


            </li>
            <li v-show="current==='completed'"></li>
          </ul>
          <!--<div class="module1_2 box">-->

            <!--<div class="unslider-arrow2 prev"></div>-->
            <!--<div class="unslider-arrow2 next"></div>-->
          <!--</div>-->

        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        current: 'going',
      }
    },
    mounted() {
      this.$store.dispatch('getBanner');
    },
    computed: {
      ...mapState(['bannerList'])
    },
    watch: {
      bannerList(value) {
        this.$nextTick(() => {
          new Swiper('#certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',

            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,

            },
            on: {
              progress: function (progress) {
                for (let i = 0; i < this.slides.length; i++) {
                  const slide = this.slides.eq(i);
                  const slideProgress = this.slides[i].progress;
                  const modify = 1;
                  if (Math.abs(slideProgress) > 1) {
                    const modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                  }

                  const translate = slideProgress * modify * 260 + 'px';

                  const scale = 1 - Math.abs(slideProgress) / 5;
                  const zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                  slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                  slide.css('zIndex', zIndex);
                  slide.css('opacity', 1);
                  if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                  }
                }
              },
              setTransition: function (transition) {
                for (let i = 0; i < this.slides.length; i++) {
                  const slide = this.slides.eq(i);
                  slide.transition(transition);
                }

              }
            }

          })

        })
      }
    }
  }
</script>

<style>
  #certify {
    position: relative;
    width: 960px;

    margin: auto;
    top: 135px;

  }

  #certify .swiper-container {
    padding-bottom: 60px;
  }

  #certify .swiper-slide {

    width: 450px;
    height: 260px;
    background: #fff;
    box-shadow: 0 8px 30px #ddd;
  }

  #certify .swiper-slide img {

    width: 100%;
    height: 260px;
    display: block;
  }

  #certify .swiper-pagination {
    width: 100%;
    bottom: 30px;
  }

  #certify .swiper-pagination-bullets .swiper-pagination-bullet {

    margin: 0 10px;
    border: 3px solid #fff;
    background-color: #d5d5d5;
    width: 10px;
    height: 10px;
    opacity: 1;
  }

  #certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
    border: 3px solid #00aadc;
    background-color: #fff;
  }

  #certify .swiper-button-prev {
    left: -30px;
    width: 45px;
    height: 45px;
    top: 120px;
    background: url(./images/wm_button_icon.png) no-repeat;
    background-position: 0 0;
    background-size: 100%;
  }

  #certify .swiper-button-prev:hover {
    background-position: 0 -46px;
    background-size: 100%
  }

  #certify .swiper-button-next {
    right: -30px;
    width: 45px;
    height: 45px;
    top: 120px;
    background: url(./images/wm_button_icon.png) no-repeat;
    background-position: 0 -93px;
    background-size: 100%;
  }

  #certify .swiper-button-next:hover {
    background-position: 0 -139px;
    background-size: 100%
  }

  .module {
    position: relative;
    width: 960px;
    margin: auto;
    top: 135px;
  }

  .module1 .left {
    background: url(./images/module3_1.jpg) no-repeat;
    height: 400px;
  }

  .module1 .fisrt_word {
    position: relative;
    top: 50px;
    margin: auto;
    left: 55px;
    color: whitesmoke;
    font-size: 30px;
  }

  .module1 .more {
    position: relative;
    top: 70px;
    margin: auto;
    left: 60px;
    color: whitesmoke;
    text-decoration: none;
  }

  .module1 .right {
    position: relative;
    margin: auto;
    top: -400px;
    left: 260px;
    bottom: 0;
    right: 0;
  }

  .group_list_nav li {
    width: 230px;
    float: left;
    text-align: center;
    line-height: 40px;
    border: 1px solid rgb(245, 245, 245);
  }

  .active {
    border-top: 3px solid #ff8400 !important;
    border-left: 1px solid #dbdee1;
    border-right: 1px solid #dbdee1;
    color: #ff8400;
  }

</style>
