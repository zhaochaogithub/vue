<template>
  <div>
    <!--路由链接-->
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <hr/>
    <!--用于渲染当前路由组件-->
    <router-view :msg="msg"></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        msg: '路由传参'
      }
    }
  }
</script>

<style>
 .router-link-active {
   color: red;
 }
</style>