<template>
  <li class="li" :style="{'background-color': bgColor}" @mouseenter.stop ="handleEnter(true)" @mouseleave.stop="handleEnter(false)">
      <input class="input" type="checkbox" v-model="content.isShow"/>{{content.title}}
      <button style="float: right; margin: 5px" v-show="isShow" @click="deleted(content.isShow)">删除</button>
  </li>
</template>

<script>
  export default {
    props: ['content', 'index', 'deleteItem'],
    data () {
      return {
        isShow: false,
        bgColor: ''
      }
    },
    methods: {
      deleted(isShow) {
        const {index, deleteItem} = this
        if(isShow) deleteItem(index)
      },
      handleEnter(bool) {
        this.isShow = bool
        if(bool) this.bgColor = 'darkgray'
        else this.bgColor = 'white'
      }
    }
  }
</script>

<style>
  .li {
    list-style: none;
    width: 200px;
  }
  .input {
    margin: 10px 10px;
  }
</style>