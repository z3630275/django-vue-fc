<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <Banner></Banner>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Nav from './components/Nav/Nav.vue'
  import Banner from './components/Banner/Banner.vue'
  export default {
    name: 'App',
    components: {
      Header,Nav,Banner
    }
  }
</script>

<style>

</style>
