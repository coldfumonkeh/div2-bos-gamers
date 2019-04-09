<template>
  <div>
    <TopNavigation />
    <router-view />
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue'
import BoS from './components/BoS.vue'
export default {
  name: 'app',
  components: {
    BoS,
    TopNavigation
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
