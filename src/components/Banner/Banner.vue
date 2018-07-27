<template>
<<<<<<< HEAD
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
      <div class="wp">
        <div class="module1">
          <div class="left">
            <!--<img src="./images/module3_1.jpg" alt="">-->
            <p class="fisrt_word">营销活动</p>
            <a class="more" href="">更多营销活动>></a>
          </div>
          <div class="right group_list">
            <div class="module1_2 box">
              <div class="imgslide2">
                <ul class="imgs">
                  <li>
                    <a href="">
                      <img width="470" height="300" src=""/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="unslider-arrow2 prev"></div>
              <div class="unslider-arrow2 next"></div>
            </div>
=======
  <div id="certify">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/certify01.png"/>
          </div>
        <div class="swiper-slide"><img src="./images/certify02.png"/>
          </div>
        <div class="swiper-slide"><img src="./images/certify03.png"/>
          </div>
        <div class="swiper-slide"><img src="./images/certify04.png"/>
          </div>
        <div class="swiper-slide"><img src="./images/certify05.png"/>
          </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af

        </div>
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
<<<<<<< HEAD
            slidesPerView: 3,
=======
            slidesPerView: 'auto',
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
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
<<<<<<< HEAD
=======

>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
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
<<<<<<< HEAD
                  const translate = slideProgress * modify * 180 + 'px';
=======
                  const translate = slideProgress * modify * 260 + 'px';
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
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
<<<<<<< HEAD
    margin: 0 auto;
    top: 135px
=======
    margin: auto;
    top: 135px;
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
  }

  #certify .swiper-container {
    padding-bottom: 60px;
  }

  #certify .swiper-slide {
<<<<<<< HEAD
    width: 100%;
    height: 240px;
=======
    width: 450px;
    height: 260px;
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
    background: #fff;
    box-shadow: 0 8px 30px #ddd;
  }

  #certify .swiper-slide img {
<<<<<<< HEAD
    display: block;
    width: 100%;
    height: 240px;
  }

=======
    width: 100%;
    height: 260px;
    display: block;
  }


>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
  #certify .swiper-pagination {
    width: 100%;
    bottom: 30px;
  }

  #certify .swiper-pagination-bullets .swiper-pagination-bullet {
<<<<<<< HEAD
    margin: 0 5px;
=======
    margin: 0 10px;
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
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
<<<<<<< HEAD
    top: 120px;
=======
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
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
<<<<<<< HEAD
    top: 120px;
=======
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
    background: url(./images/wm_button_icon.png) no-repeat;
    background-position: 0 -93px;
    background-size: 100%;
  }

  #certify .swiper-button-next:hover {
    background-position: 0 -139px;
    background-size: 100%
  }
<<<<<<< HEAD

  .module1 .left{
    position: relative;
    margin: 0;
    width: 960px;
    left: 195px;
    top:100px;
    background: url(./images/module3_1.jpg) no-repeat;
    height: 400px;
  }
  .module1 .fisrt_word{
    position: relative;
    top:50px;
    margin: auto;
    left: 55px;
    color: whitesmoke;
    font-size:30px;
  }
  .module1 .more{
    position: relative;
    top:70px;
    margin: auto;
    left: 60px;
  }

=======
>>>>>>> e1030f9787fbf60f255e672364fc0d18e8e306af
</style>
