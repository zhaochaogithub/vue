<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="" srcset="">
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>