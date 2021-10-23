<template>
  <div id="app">
    <Demo2></Demo2>
    <!-- <Demo3 v-if="view"></Demo3>
    <br>
    <button v-on:click="hide">Hide Demo3</button> -->
    <!-- <Checkpoint2></Checkpoint2> -->
  </div>
</template>

<script>
import Demo2 from '@/components/Demo2.vue'
//import Demo3 from '@/components/Demo3.vue'
//import Checkpoint2 from '@/components/Chkpt2.vue'

export default {
  name: 'App',
  components: {
    Demo2,
    //Demo3,
    //Checkpoint2
  },
  data() {
    return {
      view:true,
    }
  },
  methods: {
    hide() {
      this.view = !this.view;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
