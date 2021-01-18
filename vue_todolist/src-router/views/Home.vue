<template>
  <div>
    <div>
      <h2>Home</h2>
      <router-link to="/home/news">News</router-link>
      <router-link to="/home/message">Message</router-link>
    </div>
    <hr/>
    <div>
      <!-- 缓存路由，只需要加上keep-alive标签包住即可
            实现的效果：输入的内容不会因为切换其他界面就会被清空
       -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
