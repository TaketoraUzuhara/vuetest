<template>
    <div>
    this is test
    <input v-model="NewToDo" type="text" placeholder="enter your new to-do list" class="AddToDo" @keyup.enter="AddToDo">
    <div v-for="(todo, Index) in todos" :key="todo.id" class="todo-item">
        <div class="item-title">
            <div v-if="!todo.editing" class="item-title-true" @dblclick="EditItem(todo)">
                {{ todo.title }}
            </div>
            <input v-else type="text" class="item-title-edit" v-model="todo.title" @blur="EditDone(todo)" @keyup.enter="EditDone(todo)" @keyup.esc="EditCancel(todo)">
        </div>
        <div class="delete-button">
            <button v-on:click="DeleteItem(Index)">Delete</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'todo-list',
  data (){
      return{
          NewToDo: '',
          idToDo: 3,
          EditCashe: '',
          todos: [
              {
                  'id': 1,
                  'title': "this is first to-do list", 
                  'completed': false,
                  'editing': false,
              },
              {
                  'id': 2,
                  'title': "this is second to-do list", 
                  'completed': false,
                  'editing': false,
              }
          ]
      }
  },
  methods:{
      AddToDo() {
          if(this.NewToDo == ''){
              return
          }
          this.todos.push(
              {
                  'id': this.idToDo,
                  'title': this.NewToDo,
                  'completed': false,
                  'editing': false,
              }
          )
          this.NewToDo = ''
          this.idToDo++
      },
      EditItem(todo){
          this.EditCashe = todo.title
          todo.editing = true
      },
      EditDone(todo){
          if(todo.title==''){
              todo.title = this.EditCashe
          }
          todo.editing = false
      },
      EditCancel(todo){
          todo.title = this.EditCashe
      },
      DeleteItem(Index){
          this.todos.splice(Index, 1)
      } 
  }
  
}
</script>


<style>

    .AddToDo{
        width: 100%;   
        margin-top: 10px;
        padding: 10px;     
    }
    .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
    }
    .item-title-edit{
        font-size: 24px;
        color: #2c3e50;
        width: 100%;
        padding: 10px;
    }
</style>
