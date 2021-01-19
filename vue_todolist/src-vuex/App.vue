<template>
  <div>
    count: {{count}}
    <br>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['increase', 'decrease']),
      // increase() {
      //   this.$store.dispatch('increase')
      // },
      // decrease() {
      //   this.$store.dispatch('decrease')
      // }
    }
  }
</script>

<style>
</style>