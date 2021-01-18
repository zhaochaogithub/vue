<template>
  <div class="container">
    <Search/>
    <user-main/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import UserMain from './components/UserMain'
  export default {
    components: { 
      Search,
      UserMain 
    }
  }
</script>

<style>
</style>