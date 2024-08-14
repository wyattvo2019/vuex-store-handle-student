<template>
  <div>
    <input v-model="todoItem.title" />
    <button @click="addNewToDo()">Click</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      todoItem:{
        title:"",
        completed: false,
        id:""
      }
    }
  },
  methods: {
    addNewToDo(){
      this.$store.dispatch("addNewToDoItem", this.todoItem);
      this.todoItem = {
        title:"",
        completed: false,
        id:""
      }
    }
  }
}

</script>
