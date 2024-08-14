export function addNewToToDo(state, todoItem) {
  if(todoItem.id == ""){
    let maxID = this.state.todolist[0].id;
    for(let i = 1; i < this.state.todolist.length; i++){
      if(this.state.todolist[i].id > maxID) maxID = this.state.todolist[i].id;
    }
    todoItem.id = maxID + 1;
  }
  todoItem.completed = todoItem.completed == "" ? "false" : todoItem.completed;
  state.todolist.push(todoItem);
}
export function findMaxID(){
  let maxID = this.state.todolist[0].id;
  for(let i = 1; i < this.state.todolist.length; i++){
    if(this.state.todolist[i].id > maxID) maxID = this.state.todolist[i].id;
  }
  return maxID;
}