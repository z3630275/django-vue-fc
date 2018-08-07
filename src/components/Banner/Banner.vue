<template>
  <section>
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
    <!--<div class="module1">-->
      <!--<div class="left">-->
        <!--&lt;!&ndash;<img src="./images/module3_1.jpg" alt="">&ndash;&gt;-->
        <!--<p class="fisrt_word">营销活动</p>-->
        <!--<a class="more" href="">更多营销活动>></a>-->
      <!--</div>-->
      <!--<div class="right">-->
        <!--<ul class="group_list_nav">-->
          <!--<li @mouseover.stop="current='coming'" :class="{active:current=='coming'}"><a href="#">即将开展</a></li>-->
          <!--<li @mouseover="current='going'" :class="{active:current=='going'}"><a href="#">正在进行</a></li>-->
          <!--<li @mouseover="current='completed'" :class="{active:current=='completed'}"><a href="#">已经完成</a></li>-->
        <!--</ul>-->
        <!--<ul class="group_list_content">-->
          <!--<li v-if="current==='coming'">-->
            <!--<table class="table-left">-->
              <!--<thead>-->
              <!--<tr>-->
                <!--<th>序号</th>-->
                <!--<th>市州</th>-->
                <!--<th>活动名称</th>-->
                <!--<th>活动时间</th>-->
                <!--<th>活动简介</th>-->
                <!--<th>海报</th>-->
              <!--</tr>-->
              <!--</thead>-->
              <!--<tbody>-->
              <!--<tr>-->
                <!--<td>1</td>-->
                <!--<td>长沙</td>-->
                <!--<td>Tokyo</td>-->
                <!--<td>33</td>-->
                <!--<td>2008/11/28</td>-->
                <!--<td>$162,700</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>2</td>-->
                <!--<td>张家界</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>2</td>-->
                <!--<td>张家界</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>2</td>-->
                <!--<td>张家界</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>2</td>-->
                <!--<td>张家界</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>2</td>-->
                <!--<td>张家界</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--</tbody>-->
            <!--</table>-->
          <!--</li>-->
          <!--<li v-else-if="current==='going'">-->
            <!--<table class="table-left">-->
              <!--<thead>-->
              <!--<tr>-->
                <!--<th>序号</th>-->
                <!--<th>Position</th>-->
                <!--<th>Office</th>-->
                <!--<th>Age</th>-->
                <!--<th>Start date</th>-->
                <!--<th>-->
                  <!--要一个新名称来称呼他们所讲授的课程，于是便出现了“市场营销”这个名词。-->
                <!--</th>-->
              <!--</tr>-->
              <!--</thead>-->
              <!--<tbody>-->
              <!--<tr>-->
                <!--<td>Airi Satou</td>-->
                <!--<td>Accountant</td>-->
                <!--<td>Tokyo</td>-->
                <!--<td>33</td>-->
                <!--<td>2008/11/28</td>-->
                <!--<td>$162,700</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>Angelica Ramos</td>-->
                <!--<td>Chief Executive Officer (CEO)</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--</tbody>-->
            <!--</table>-->

          <!--</li>-->
          <!--<li v-else>-->
            <!--<table class="table-left">-->
              <!--<thead>-->
              <!--<tr>-->
                <!--<th>序号</th>-->
                <!--<th>Position</th>-->
                <!--<th>Office</th>-->
                <!--<th>Age</th>-->
                <!--<th>Start date</th>-->
                <!--<th>Salary</th>-->
              <!--</tr>-->
              <!--</thead>-->
              <!--<tbody>-->
              <!--<tr>-->
                <!--<td>Airi Satou</td>-->
                <!--<td>Accountant</td>-->
                <!--<td>Tokyo</td>-->
                <!--<td>33</td>-->
                <!--<td>2008/11/28</td>-->
                <!--<td>$162,700</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>Angelica Ramos</td>-->
                <!--<td>Chief Executive Officer (CEO)</td>-->
                <!--<td>London</td>-->
                <!--<td>47</td>-->
                <!--<td>2009/10/09</td>-->
                <!--<td>$1,200,000</td>-->
              <!--</tr>-->
              <!--</tbody>-->
            <!--</table>-->
          <!--</li>-->
        <!--</ul>-->

      <!--</div>-->
    <!--</div>-->
    <!--<div class="module2">-->
      <!--<div class="left">-->
        <!--&lt;!&ndash;<img src="./images/module3_1.jpg" alt="">&ndash;&gt;-->
        <!--<p class="fisrt_word">旗舰店</p>-->
        <!--<a class="more" href="">更多旗舰店>></a>-->
      <!--</div>-->
      <!--<div class="right">-->
        <!--<ul>-->

          <!--<li class="">-->
            <!--<a href="/org/home/2/">-->
              <!--<div class="company" @mouseover="vdisplay='block'" @mouseout="vdisplay='none'">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/imooc_4IdqJ9p.png">-->
                <!--<div class="score" :style="{display: vdisplay}">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="长沙">长沙</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/3/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/beijingdaxue.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="湘潭">湘潭</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/5/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/zju_XOugCKr.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="株洲">株洲</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/6/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/ynu_70oImVZ.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="衡阳">衡阳</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="five">-->
            <!--<a href="/org/home/7/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/mtianyan_mFUZjXX.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="郴州">郴州</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/8/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/fudan.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="常德">常德</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/9/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/mtianyan_6chFdZo.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="益阳">益阳</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/10/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/shenzhen.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="娄底">娄底</span></p>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li class="">-->
            <!--<a href="/org/home/8/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/fudan.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="邵阳">邵阳</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/9/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/mtianyan_6chFdZo.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="岳阳">岳阳</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/10/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/shenzhen.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="永州">永州</span></p>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li class="">-->
            <!--<a href="/org/home/8/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/fudan.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="怀化">怀化</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/9/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/mtianyan_6chFdZo.png">-->
                <!--<div class="score" style="display: none;">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="湘西">湘西</span></p>-->
            <!--</a>-->
          <!--</li>-->

          <!--<li class="">-->
            <!--<a href="/org/home/10/">-->
              <!--<div class="company">-->
                <!--<img src="http://mxonlinestatic.mtianyan.cn/mnt/Mxonline2/media/org/2018/01/shenzhen.png">-->
                <!--<div class="score">-->
                  <!--<div class="circle">-->
                    <!--<h2>国内名校</h2>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p><span class="key" title="张家界">张家界</span></p>-->
            <!--</a>-->
          <!--</li>-->


        <!--</ul>-->
      <!--</div>-->

    <!--</div>-->
  </section>

</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        current: 'going',
        vdisplay: 'none',
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
                    const modify = (Math.abs(slideProgress) - 1) * 0.3+ 1;
                  }

                  const translate = slideProgress * modify *100+ 'px';

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
    width: 1100px;
    margin: auto;

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
    bottom: 20px;
  }

  #certify .swiper-pagination-bullets .swiper-pagination-bullet {

    margin: 0 15px;
    border: 3px solid #fff;
    background-color: #d5d5d5;
    width: 15px;
    height: 15px;
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

  /*.module1 {*/
    /*width: 1000px;*/
    /*height: 400px;*/
    /*margin: auto;*/
    /*position: relative;*/

  /*}*/

  /*.module1 .left {*/
    /*background: url(./images/module3_1.jpg) no-repeat;*/
    /*height: 400px;*/
    /*width: 200px;*/
  /*}*/

  /*.fisrt_word {*/
  /*position: absolute;*/
  /*top: 50px;*/
  /*margin: auto;*/
  /*color: whitesmoke;*/
  /*font-size: 25px;*/
  /*width: 200px;*/
  /*text-align: center;*/
  /*}*/

  /*.more {*/
  /*position: absolute;*/
  /*top: 85px;*/
  /*margin: auto;*/
  /*left: 50px;*/
  /*color: whitesmoke;*/
  /*text-decoration: none;*/
  /*}*/

  /*.module1 .right {*/
    /*position: relative;*/
    /*width: 780px;*/
    /*margin: auto;*/
    /*left: 112px;*/
    /*top: -400px;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*height: 50px;*/
  /*}*/

  /*!*.group_list_nav{*!*/
  /*!*z-index: 1000;*!*/
  /*!*}*!*/

  /*.group_list_nav li {*/
    /*width: 33.33%;*/
    /*float: left;*/
    /*text-align: center;*/
    /*line-height: 40px;*/
    /*border: 1px solid rgb(245, 245, 245);*/
    /*box-sizing: border-box;*/

  /*}*/

  /*.group_list_nav li a {*/
    /*font-size: 14px;*/
    /*font-weight: bold;*/
    /*color: #424242;*/
  /*}*/

  /*.group_list_content li {*/
    /*float: left;\*/
    /*margin-top: 15px;*/
    /*width: 100%;*/

  /*}*/

  /*.active {*/
    /*border-top: 3px solid #ff8400 !important;*/
    /*border-left: 1px solid #dbdee1;*/
    /*border-right: 1px solid #dbdee1;*/
    /*color: #ff8400;*/
  /*}*/

  /*table {*/
    /*width: 100%;*/
    /*font-size: .938em;*/

  /*}*/

  /*th {*/
    /*background: #ddde;*/
    /*padding: .5em .5em;*/
  /*}*/

  /*!*tr:first-child {*!*/
  /*!*width: 20px;*!*/
  /*!*}*!*/

  /*td {*/
    /*padding: .5em .5em;*/
    /*border-bottom: solid 1px #ccc;*/
  /*}*/

  /*table, table tr th, table tr td {*/
    /*border: 1px solid #0094ff;*/
    /*text-align: center;*/
    /*line-height: 30px;*/
    /*vertical-align: middle;*/

  /*}*/

  /*.module2 {*/
    /*width: 1000px;*/
    /*margin: auto;*/
    /*position: relative;*/
    /*top: 30px;*/
  /*}*/

  /*.module2 .left {*/
    /*background: url(./images/module6_1.jpg) no-repeat;*/
    /*height: 400px;*/
    /*width: 200px;*/
    /*position: absolute;*/
  /*}*/

  /*.module2 .right {*/
    /*width: 816px;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*left:220px;*/
  /*}*/


  /*.module2 li {*/
    /*width: 140px;*/
    /*height: 100px;*/
    /*float: left;*/
    /*margin-right: 20px;*/
    /*margin-bottom: 40px;*/

  /*}*/

  /*.module2 .company {*/
    /*width: 100%;*/
    /*height: 100px;*/
    /*border: 1px solid #e5e5e5;*/
    /*text-align: center;*/
    /*vertical-align: middle;*/
    /*position: relative;*/
    /*background: #fff;*/
  /*}*/

  /*.module2 .company img {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*vertical-align: middle;*/
  /*}*/

  /*.module2 .score {*/
    /*display: none;*/
    /*position: absolute;*/
    /*z-index: 3;*/
    /*left: 0;*/
    /*top: 0;*/
    /*background: #717171;*/
    /*opacity: .9;*/
    /*filter: Alpha(opacity=90);*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*color: #fff;*/
    /*text-align: center;*/
  /*}*/
/*.module2 li p {*/
    /*line-height: 40px;*/
    /*text-align: center;*/
    /*color: #333;*/
/*}*/
  /*.module2 .key:hover {*/
    /*color: #fb8341 !important;*/
    /*font-size: 14px;*/
/*}*/
</style>
