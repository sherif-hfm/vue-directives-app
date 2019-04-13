<template>
  <div id="app">
    <h1>vue directives</h1>
    <h2>vue Build In Directives</h2>
    <buildInDirectives></buildInDirectives>
    <hr> 
    <hightlightTest></hightlightTest>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import buildInDirectives from './components/build-in-directives.vue'
import hightlightTest from './components/hightlightTest.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,buildInDirectives,hightlightTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
