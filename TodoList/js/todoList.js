let todoListArray = [];
let todoHTML = "";

document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    let todoInput = document.querySelector('.js-todo-input').value;
    if(todoInput !== ""){
    todoListArray.push(todoInput);
    todoHTML = "";
    renderTodo();
    document.querySelector('.js-todo-input').value = "";
    console.log(todoListArray);
    }
}

function renderTodo(){
    let showDiv = document.querySelector('.js-show-todo');
    todoListArray.forEach((todo,index)=>{
        const html = `<p>${todo}<button onclick="
            todoListArray.splice(${index},1);
            todoHTML = '';
            renderTodo();
        " class="js-delete-button">Delete</button></p>`;
        todoHTML += html; 
    })
    showDiv.innerHTML = todoHTML;
    console.log(todoHTML);
}