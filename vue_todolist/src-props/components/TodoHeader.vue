<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="add"/>
  </div>  
</template>

<script>
  export default {
    props: ['addItem'],
    data () {
      return {
        title: ''
      }
    },
    methods: {
      add() {
        const {addItem, title} = this
        const content = {
          title,
          isShow: false
        }
        addItem(content)
      }
    }
  }
</script>

<style>

</style>