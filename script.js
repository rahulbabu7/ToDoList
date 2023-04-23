const form = document.querySelector('form');  //form 
const input = document.querySelector('input');
const todoUl = document.querySelector('ul');
// const todolist = JSON.parse(localStorage.getItem('ul'));

// if(todolist){
//     todolist.forEach(todo=>addTodo(todo))

    
// }
//adding event to form
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTodo();

});

//adding to list
function addTodo(todo){

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
            //updateLs(); 

            
        });
        todoElement.textContent = todoText;
        todoUl.appendChild(todoElement);
        input.value = " "; ///after adding the  task clear the input section

        //remove right click
        todoElement.addEventListener('contextmenu',(e)=> {
        e.preventDefault();
        todoElement.remove();

      //  updateLs();  //update localstorage
        
        
        });
    }
}

// function updateLs(){
//      todoElement = document.querySelectorAll('li');
//      const todo= [];
//      todoElement.forEach(todoel => {
//         todo.push({
//             text: todoel.innerText,
//             completed : todoel.classList.contains('completed')
//         })
//      });
//     localStorage.setItem('todos',JSON.stringify(todo)); 
// }

