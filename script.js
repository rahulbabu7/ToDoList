const form = document.querySelector("form"); //form
const input = document.querySelector("input");
const todoUl = document.querySelector("ul");
const clearTask = document.querySelector(".clear-task");
const todoLi = document.querySelectorAll("li");
//adding event to form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});


//dom load
document.addEventListener("DOMContentLoaded",load());

//loading

function load() {
  let ls = localStorage.getItem("todo");
  let todo = ls ? JSON.parse(ls) : [];
  todo.forEach(i=> {
    const todoElement = document.createElement("li");
    todoElement.className = "task";
     
    todoElement.textContent = i;
    todoUl.appendChild(todoElement);
    
  });
}
//adding to list
function addTodo() {
  const todoText = input.value;

  //if no text is passed
  if (!todoText) {
    alert("add any task");
    return;
  } else {
    const todoElement = document.createElement("li");
    todoElement.className = "task";

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
    });

    
    todoElement.textContent = todoText;
    todoUl.appendChild(todoElement);
    input.value = " "; ///after adding the  task clear the input section
    updatels(todoText);

    //remove right click
    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
      clearTask();
    });
  }
}
clearTask.addEventListener("click", () => {
  cleartask();
});

cleartask = () => {
  localStorage.clear();


  //removing the li 
  while( todoUl.firstChild ){
    todoUl.removeChild( todoUl.firstChild );
  }
  
};

function updatels(todoz) {
  let ls = localStorage.getItem("todo");
  let todo = ls ? JSON.parse(ls) : [];
   todo.push(todoz);
  localStorage.setItem("todo", JSON.stringify(todo));
}
