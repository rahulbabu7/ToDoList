const form = document.querySelector('form');  //form 
const input = document.querySelector('input');
const todoUl = document.querySelector('ul');


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
            

            
        });
        todoElement.textContent = todoText;
        todoUl.appendChild(todoElement);
        input.value = " "; ///after adding the  task clear the input section

        //remove right click
        todoElement.addEventListener('contextmenu',(e)=> {
        e.preventDefault();
        todoElement.remove();

        });
    }
}

