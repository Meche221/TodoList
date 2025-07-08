const todoList = ['make dinner', 'wash dishes']; 

renderTodoList();

function renderTodoList(){

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo() {
 const inputElement= document.querySelector('#js-name-input');
 const name = inputElement.value;

 todoList.push(name);
 console.group(todoList);

 inputElement.value = " ";

 renderTodoList();
}







// const nums = [1, 2, 3, 4];
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   total += num;
// }
// console.log(total);

// const numsDoubled = [];
// for(let i = 0; i< nums.length; i++){
//   const num = nums[i];
//   numsDoubled.push(num * 2);
// }
// console.log(numsDoubled);