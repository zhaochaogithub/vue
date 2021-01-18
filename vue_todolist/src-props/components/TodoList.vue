<template>
  <ul class="ul">
    <TodoItem v-for="(content, index) in contents" :key="index" :index="index" :content="content" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem' 
  export default {
    props: ['contents', 'deleteItem'],
    components: {
      TodoItem
    }
  }
</script>

<style>
  .ul {
    padding: 0px;
  }
</style>