const todoList = []; 

function addTodo() {
 const inputElement= document.querySelector('#js-name-input');
 const name = inputElement.value;

 todoList.push(name);
 console.group(todoList);

 inputElement.value = " ";
}
