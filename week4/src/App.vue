<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Demo2 msg="This is the demo2 file"></Demo2> -->
    <!-- <ToDoList></ToDoList> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//import Demo2 from '@/components/Demo2';
//import ToDoList from '@/components/ToDoList';

export default {
  name: 'App',
  components: {
    HelloWorld,
    //Demo2,
    //ToDoList
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
