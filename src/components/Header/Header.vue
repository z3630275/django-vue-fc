<template>
  <div>
    <span> {{Date.now() | dateString}} </span>
    <p>电脑票工作</p>
    <img src="./images/2017fcw_index_bg.png.jpg" alt="" width="100%" height="260px">

  </div>
</template>

<script>

  export default {}

</script>

<style scoped>
  span {
    background: #5187bd;
    padding: 10px;
    font-size: 12px;;
    display: block;
    color: azure;

  }

  p {
    position: absolute;
    left: 400px;
    top: 100px;
  }

  img {
    position: absolute;
    top: 8px;
    z-index: -100;
  }
</style>
