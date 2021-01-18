<template>
  <div>
    <ul>
      <li v-for="(content, index) in contents" :key="index">
        <!-- 如果想让${content.id}生效：
             1.使用"``"语法
             2.等号前面的属性值加上冒号
         -->
        <router-link :to="`/home/message/detail/${content.id}`">{{content.title}}</router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MessageDetail from './MessageDetail'
  export default {
    data () {
      return {
        contents: [
          {
            id: 1,
            title: 'message01'
          },
          {
            id: 2,
            title: 'message02'
          }
        ]  
      }
    },
    components: {
      MessageDetail
    }
  }
</script>

<style>
</style>