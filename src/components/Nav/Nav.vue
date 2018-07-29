<template>
  <div id="top-nav">
    <ul>
      <li v-for="(title,index) in titles" :key="index" :style="{width:AoutWidth+'px' }"><a href="#">{{title}}</a></li>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        titles: ['首页', '营销活动', '旗舰店建设', '营销活动', '旗舰店建设', '营销活动', '旗舰店建设', '营销活动']
      }
    },
    computed: {
      AoutWidth() {
        const count = this.titles.length;
        let countwidth;
        countwidth = 960/ count;
        return countwidth
      }
    },

  }
</script>

<style scoped>
  #top-nav {
    position: relative;
    width: 960px;
    height: 50px;
    background-color: #015293;
    margin: auto;
    top: 135px;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
  }

  #top-nav li {
    float: left;
    text-align: center;
    font-size: 14px;
    line-height: 50px;
    background: linear-gradient(to bottom, whitesmoke, wheat, white) no-repeat left / 1px 25px;
  }

  #top-nav li:first-child{
    background: none;
  }

  #top-nav li a {
    color: white;
  }


</style>
