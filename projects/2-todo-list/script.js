function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML ="";
  todos.forEach(todo => {
     const listItem = document.createElement("li");
     listItem.innerText = todo.task;
     listItem.className =
       "list-group-item d-flex justify-content-between align-items-center";
     if(todo.completed){
       listItem.style.textDecoration ="line-through";
     } 
     const buttons = document.createElement("span");
     buttons.className = "badge bg-primary rounded-pill";
     const completeButton= document.createElement("i");
     completeButton.className = "fa fa-check";
     buttons.appendChild(completeButton);
     listItem.appendChild(buttons);
     completeButton.addEventListener( "click", ()=>{
       todo.completed = !todo.completed;
       populateTodoList(todos);
       
     })

     list.appendChild(listItem);
    
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: true },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
const newToDoInput = document.getElementById("todoInput");
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  todos.push({task:newToDoInput.value,completed:false})
  newToDoInput.value ="";
  populateTodoList(todos);

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
