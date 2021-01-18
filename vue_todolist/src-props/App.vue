<template>
  <div class="app">
    <todo-header :addItem="addItem"/>
    <todo-list :contents="contents" :deleteItem="deleteItem"/>
    <todo-footer :contents="contents"/>
  </div>
</template>

<script>
  import TodoList from './components/TodoList'
  import TodoHeader from './components/TodoHeader'
  import TodoFooter from './components/TodoFooter'
  import axios from 'axios'

  export default {
    components: {
      TodoList,
      TodoHeader,
      TodoFooter
    },
    data() {
      return {
        contents: [
          {
            title: '每日一读',
            isShow: false
          },
          {
            title: '每日天气',
            isShow: false
          },
          {
            title: '每日报表',
            isShow: false
          }
        ]
      }
    },
    mounted () {
      const url = `http://www.baidu.com`
      // this.$http.get(url).then(resp => {
      //   console.log("1")
      // }, errors => {
      //   console.log("1")
      // })
      axios.get(url).then(resp => {
        console.log('axios')
      }).catch( errors => {

      })
    },
    methods: {
      deleteItem(index) {
        this.contents.splice(index, 1)
      },
      addItem(content) {
        this.contents.unshift(content)
      }
    }
  }
</script>

<style>
  .app {
    width: 200px;
    display: inline-block;
  }
</style>