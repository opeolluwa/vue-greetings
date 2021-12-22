<template>
  <div id="app">
  <vue-greetings/>
  </div>
</template>

<script>
import VueGreetings from 'vue-greetings'

export default {
  name: 'App',
  components: {
    VueGreetings
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
