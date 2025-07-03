let todoListArray = [];
let todoHTML = "";

document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    let todoInput = document.querySelector('.js-todo-input').value;
    todoListArray.push(todoInput);
    let html = `<p>${todoInput} <button>Delete</button></p>
                
    `;
    todoHTML += html;
    document.querySelector('.js-show-todo').innerHTML = todoHTML;
    todoInput = "";

    console.log(todoHTML);
}