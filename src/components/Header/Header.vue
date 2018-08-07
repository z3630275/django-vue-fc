<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
        <span class="text-light">{{Date.now()|dateString}}</span>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search"  aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown  </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
    </div>
  </nav>
  </section>
</template>

<script>

  export default {}

</script>

<style scoped>
  /*.mynavbar{*/
    /*height: 100%;*/

  /*}*/

  /*.navbar-brand{margin-left:50px;border: 1px solid #fff;width: 100px;height: 40px;text-align: center;}*/
  /*ul{margin-left:50px;}*/
  /*ul li a{margin-right: 40px;color: #fff !important;}*/
  /*.navbar-toggler-icon{color:#fff !important;}*/
  /*.navbar-dark .navbar-toggler{border-color: white !important;}*/
  /*.mynavbar{*/
  /*background: url("./images/2017fcw_index_bg.png.jpg") no-repeat  center;*/
  /*height: 260px;*/
  /*}*/
  /*span {*/
  /*background: #5187bd;*/
  /*padding: 10px;*/
  /*font-size: 12px;;*/
  /*display: block;*/
  /*color: azure;*/

  /*}*/

  /*p {*/
  /*position: absolute;*/
  /*left: 400px;*/
  /*top: 100px;*/
  /*}*/

  /*img {*/
  /*position: absolute;*/
  /*top: 8px;*/
  /*z-index: -100;*/
  /*}*/


</style>
