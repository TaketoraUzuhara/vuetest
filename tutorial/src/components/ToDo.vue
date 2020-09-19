<template>
    <div>
    this is test
    <input v-model="NewToDo" type="text" placeholder="enter your new to-do list" class="AddToDo" @keyup.enter="AddToDo">

    <div v-for="(todo, Index) in todosFilter" :key="todo.id" class="todo-item">
        <div class="check-box"><input type="checkbox" v-model="todo.completed"></div>
        <div class="item-title">
            <div v-if="!todo.editing" class="item-title-true" @dblclick="EditItem(todo)" :class="{ completed : todo.completed}">
                {{ todo.title }}
            </div>
            <input v-else type="text" class="item-title-edit" v-model="todo.title" @blur="EditDone(todo)" @keyup.enter="EditDone(todo)" @keyup.esc="EditCancel(todo)">
        </div>
        <div class="delete-button">
            <button v-on:click="DeleteItem(Index)">Delete</button>
        </div>
    </div>
    <div class="extra-container">
        <div><label><input type="checkbox" class="check-all-box" :checked="!anyRemaining" @change="checkAllItems">check all</label></div>
        <div class="remain-items">{{ remaining }} items left</div>
    </div>
    <div class="extra-container">
        <div class="buttons">
            <button :class="{ active : filter == 'all'}" @click="filter = 'all'">All</button>    
            <button :class=" {active : filter == 'active'}" @click="filter = 'active'">Active</button>    
            <button :class=" {active : filter == 'completed'}" @click="filter = 'completed'">Completed</button>
        </div> 
        <div class="clear-complete-button"><button v-if="showClearCompletedbutton" @click="clearCompleted">clear button</button></div>
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
          filter: 'all',
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
  computed:{
      remaining (){
          return this.todos.filter(todo => !todo.completed).length
      },
      anyRemaining (){
          return this.remaining != 0
      },
      todosFilter (){
          if(this.filter == 'all'){
              return this.todos
          } else if(this.filter == 'active'){
              return this.todos.filter(todo => !todo.completed)
          } else if(this.filter == 'completed'){
              return this.todos.filter(todo => todo.completed)
          }
          return this.todos
      },
      showClearCompletedbutton (){
          return this.todos.filter((todo) => todo.completed).length > 0
      },
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
      },
      checkAllItems() {
          this.todos.forEach((todo) => todo.completed = event.target.checked)
      },
      clearCompleted() {
          this.todos = this.todos.filter((todo) => !todo.completed)
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
        text-align: left;
    }
    .item-title-edit{
        font-size: 24px;
        color: #2c3e50;
        width: 100%;
        padding: 10px;
    }
    .completed{
        text-decoration: line-through;
    }
    .extra-container{
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #2c3e50;
        padding-top: 10px;
    }
    .check-all-box{
        margin-right: 8px;
    }
    .active{
        background-color: aqua;
    }
</style>
