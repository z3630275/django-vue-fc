<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <Banner></Banner>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Nav from './components/Nav/Nav.vue'
  import Banner from './components/Banner/Banner.vue'
  import Footer from './components/Footer/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,Nav,Banner,Footer
    }
  }
</script>

<style>
#app{
  position: relative;
}


</style>
