let todoListArray = [];
let todoHTML = "";

document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    let todoInput = document.querySelector('.js-todo-input').value;
    todoListArray.push(todoInput);
    todoHTML = "";
    renderTodo();
    document.querySelector('.js-todo-input').value = "";
    console.log(todoListArray);
}

function renderTodo(){
    let showDiv = document.querySelector('.js-show-todo');
    todoListArray.forEach(todo=>{
        const html = `<p>${todo}<button>Delete</button></p>`;
        todoHTML += html; 
    })
    showDiv.innerHTML = todoHTML;
    console.log(todoHTML);
}