<template>
    <div>
    this is test
    <input v-model="NewToDo" type="text" placeholder="enter your new to-do list" class="AddToDo" @keyup.enter="AddToDo">

    <ToDoItem v-for="(todo, index) in todosFilter" :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaining"
    @DeleteItem="DeleteItem"  @EditDone="EditFinished" >
    </ToDoItem>
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
import ToDoItem from "./ToDoItem.vue";

export default {
  name: 'todo-list',
  components: {
      ToDoItem,
  },
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
      checkAllItems() {
          this.todos.forEach((todo) => todo.completed = event.target.checked)
      },
      clearCompleted() {
          this.todos = this.todos.filter((todo) => !todo.completed)
      },
      EditFinished(data){
          this.todos.splice(data.index, 1 , data.todo)
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
