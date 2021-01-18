<template>
  <div>
    {{todos}}已完成 / 全部 {{contents.length}}
  </div>
</template>

<script>
  export default {
    props: ['contents'],
    computed: {
      todos() {
        return this.contents.reduce((total, todo) => total + (todo.isShow ? 1 : 0), 0)
      }
    }
  }
</script>

<style>

</style>