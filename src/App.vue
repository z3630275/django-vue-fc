<template>
  <div id="app">
    <Header></Header>
    <Bimg></Bimg>
    <Nav></Nav>
    <Banner></Banner>
    <Mymain></Mymain>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Nav from './components/Nav/Nav.vue'
  import Banner from './components/Banner/Banner.vue'
  import Footer from './components/Footer/Footer.vue'
  import Bimg   from './components/Bimg/Bimg.vue'
  import Mymain from './components/Mymain/Mymain.vue'
  export default {
    name: 'App',
    components: {
      Header,Nav,Banner,Footer,Bimg,Mymain
    }
  }
</script>

<style>
#app{
  position: relative;
}


</style>
