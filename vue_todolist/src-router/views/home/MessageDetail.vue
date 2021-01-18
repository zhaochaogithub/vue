<template>
  <div>
    <p>{{$route.params.id}}</p>
    <p>ID: {{detail.id}}</p>
    <p>Title: {{detail.title}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        details: [
          {
            id: 1,
            title: 'message01'
          },
          {
            id: 2,
            title: 'message02'
          }
        ],
        detail: {}
      }
    },
    mounted () {
      setTimeout(()=>{
        const id = this.$route.params.id*1
        this.detail = this.details.find(detail => detail.id === id)
      }, 1000)
    },
    watch: {
      $route: function(value) { //这个value指的是路由$route的最新值
        console.log(value)
        const id = value.params.id*1
        this.detail = this.details.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>
</style>