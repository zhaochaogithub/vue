<template>
  <div id="app">
    <div class="add">
      <Add :addContent="addContent"/>
    </div>
    <div>
      <List :contents="contents" :deleteContent="deleteContent"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    name: 'App',
    components: {
      Add,
      List
    },
    data () {
      return {
        contents: [
          {
            name: 'zs',
            text: '不错'
          },
          {
            name: 'ls',
            text: '挺好的'
          }
        ]
      }
    },
    methods: {
      addContent (content) {
        this.contents.unshift(content)
      },
      deleteContent(index) {
        this.contents.splice(index, 1)
      }
    }
  }
</script>

<style>
  .add {
    float: left;
  }
</style>
