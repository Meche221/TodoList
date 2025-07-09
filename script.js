const todoList =[]; 

renderTodoList();

function renderTodoList(){

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject;
  const html = 
  `<div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
  todoList.splice(${i}, 1);
  renderTodoList();
  ">Delete</button>
   `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo() {
 const inputElement= document.querySelector('#js-name-input',);
 const name = inputElement.value;

 const dataInputElement = document.querySelector('#js-due-date-input');
 const dueDate = dataInputElement.value

 todoList.push({
  name,
  dueDate
 });

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