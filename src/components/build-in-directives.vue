<template>
  <div id="app">
   <p v-text="'text Directive'"></p>
   <p v-html="html"></p>
  </div>
</template>

<script>


export default {
  name: 'buildInDirectives',
  components: {
    
  },
  data:function(){
      return {
          html:'<h3> html Directive1 </h3>'
      }
  }
}
</script>

<style>

</style>
