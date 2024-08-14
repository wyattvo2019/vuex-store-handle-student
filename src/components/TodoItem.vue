<template>
  <div>
    {{ todoitem.id }}
    {{ todoitem.title }}
    {{ todoitem.completed }}
  </div>
</template>
<script>

// const {todoitem} = defineProps({
//   todoitem:{
//     required: true,
//     type: Object

//   }
// })


export default {
  props: {
    todoitem: Object,
  }
}

</script>