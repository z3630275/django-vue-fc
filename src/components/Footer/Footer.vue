<template>

    <div class="footer">
      <div class="wp">
        <ul class="cont">
          <li class="logo"><a href="/"><img src="http://mxonlinestatic.mtianyan.cn/static/images/footlogo.png"></a></li>
          <li class="code"><img src="http://mxonlinestatic.mtianyan.cn/static/images/code.jpg">
            <p class="center">扫描关注微信</p></li>
          <li class="third"><img class="fl" src="http://mxonlinestatic.mtianyan.cn/static/images/tell.png">
            <p class="tell">23333333</p>
            <p class="time">周一至周日 9:00-18:00</p></li>
        </ul>

      </div>
      <p class="line"></p>
      <div class="wp clear">
        <span class="fl">©2018 mxonline.mtianyan.cn mtianyan慕课小站-在线学习交流平台 保留所有权利</span>
        <span class="fr">copyright© 2018 ICP备案证书号：<a style="color:#717171 " href="http://www.miitbeian.gov.cn/">陕ICP备16011333号-1</a></span>
      </div>
    </div>

</template>

<script>

  export default {}
</script>

<style>
  .footer {
    background: #3a3a3a;
    position: absolute;

    margin-top: 580px;
    height: 300px;
    padding: 15px;
    color: #717171;
    width: 100%;

  }

  .wp {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    clear: both;
  }

  .footer .cont {
    height: 140px;
    padding: 20px;
    margin-top: 10px;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    color: #fff;
  }

  .footer .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #343434;
    clear: both;
    margin: 20px 0;
  }

  .footer .cont li {
    width: 33.3%;
    float: left;
  }

  .footer .cont .code {
    text-align: center;
  }

  .footer .cont .third {
    text-align: left;
    float: right;
    width: 250px;
    margin-top: 35px;
  }

  .footer .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #343434;
    clear: both;
    margin: 20px 0;
  }

  .footer .code img {
    width: 100px;
    height: 100px;
  }

</style>
