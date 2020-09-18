<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <ToDoList class="todo-list"></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDo.vue'
export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
.container{
  max-width: 600px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>
