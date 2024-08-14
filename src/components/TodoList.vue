<template>
  <div>
    <TodoItem v-for="todo in todolist" :key="todo.id" :todoitem="todo"/>
  </div>
</template>
<script setup>
import { computed } from "vue";
import store from "../store";
import TodoItem from "../components/TodoItem.vue";
const todolist = computed(()=> store.state.todolist);
</script>