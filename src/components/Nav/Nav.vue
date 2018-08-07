<template>
  <section class="mynav container">
    <ul class="nav  justify-content-around ">
      <li class="nav-item " v-for="(title,index) in titles" :key="index">
        <a class="nav-link text-light" href="#">{{title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>

  export default {
    data() {
      return {
        titles: ['首页', '营销活动', '旗舰店建设', '增机布点','联系我们']
      }
    },

  }
</script>

<style scoped>
  .mynav {
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    background: #015293;
  }

  .mynav li {
    background: linear-gradient(to bottom, whitesmoke, wheat, white) no-repeat right / 1px 25px;
    padding-right: 60px;
  }
  .mynav li:last-child{
    background: none;
  }


  a {
    text-decoration: none;
  }


</style>
