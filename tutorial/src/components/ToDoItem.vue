<template>
<div class="todo-items">
    <div class="check-box"><input type="checkbox" v-model="completed" @change="EditDone"></div>
    <div class="item-title">
        <div v-if="!editing" class="item-title-true" @dblclick="EditItem" :class="{ completed : completed}">
                {{ title }}
        </div>
        <input v-else type="text" class="item-title-edit" v-model="title" @blur="EditDone" @keyup.enter="EditDone" @keyup.esc="EditCancel">
    </div>
    <div class="delete-button">
            <button v-on:click="DeleteItem(index)">Delete</button>
    </div>
</div>
  
</template>

<script>
export default {
    name: "todo-items",
    props:{
        todo:{
            type: Object,
            required: true,
        },
        index:{
            type: Number,
            required: true,
        },
        checkAll:{
            type: Boolean,
            required:true,
        }
    },
    data(){
        return{
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editinig,
            'EditCashe': ''
        }
    },
    watch:{
        checkAll(){
            if(this.checkAll) {
                this.completed = true
            } else {
                this.completed = this.todo.completed
            }
        }
    },
    methods:{
        DeleteItem (index){
            this.$emit('DeleteItem', index)
        },
        EditItem (){
            this.EditCashe = this.title
            this.editing = true
        }, 
        EditDone(){
          if(this.title==''){
              this.title = this.EditCashe
          }
            this.editing = false
            this.$emit('EditDone', {
                'index': this.index,
                'todo':{
                    'id': this.id,
                    'title': this.title,
                    'completed': this.completed,
                    'editing': this.editinig,
                }
            })
        },
        EditCancel(){
            this.title = this.EditCashe
        },
    }
}
</script>

<style>
    .todo-items{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
        text-align: left;
    }
    
    .completed{
        text-decoration: line-through;
    }
    .item-title-edit{
        font-size: 24px;
        color: #2c3e50;
        width: 100%;
        padding: 10px;
    }
</style>