<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './view/Home/HomePage.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss" scoped>
</style>
