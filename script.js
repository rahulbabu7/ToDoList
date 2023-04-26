const form = document.querySelector('form');  //form 
const input = document.querySelector('input');
const todoUl = document.querySelector('ul');
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [];
//adding event to form
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTodo();

});

//adding to list
function addTodo(){

    const  todoText = input.value;
   
    //if no text is passed
    if(!todoText){
        alert("add any task");  
        return;
    }else{
        const todoElement = document.createElement('li');
        todoElement.className = 'task';

        todoElement.addEventListener('click',()=> {
           todoElement.classList.toggle('completed');
            // updateLs(todoElement); 
         todo.push(todoText);
         localStorage.setItem('todo',JSON.stringify(todo));
            
        });
        todo.push(todoText);
        localStorage.setItem('todo',JSON.stringify(todo));
        todoElement.textContent = todoText;
        todoUl.appendChild(todoElement);
        input.value = " "; ///after adding the  task clear the input section

        //remove right click
        todoElement.addEventListener('contextmenu',(e)=> {
        e.preventDefault();
        todoElement.remove();

    //   updateLs(todoElement);  //update localstorage
        
        
        });
    }
}

function updateLs(task){
     let tasks;
     if(localStorage.getItem('tasks')===null)
     {
        tasks = []
     }
     else
     {
        tasks = JSON.parse(localStorage.getItem('tasks'))
     }
     tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks)); 
}

