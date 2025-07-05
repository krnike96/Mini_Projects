let todoListArray = [];
let todoHTML = "";

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const todoInput = document.querySelector('.js-todo-input').value;
    const todoDateInput = document.querySelector('.js-todoDate-input').value;
    if (todoInput !== "" && todoDateInput !== "") {
        todoListArray.push({ todoInput, todoDateInput });
        todoHTML = "";
        renderTodo();
        document.querySelector('.js-todo-input').value = "";
        document.querySelector('.js-todoDate-input').value = "";
        console.log(todoListArray);
    } else {
        alert("Either Todo or Date is invalid!");
    }
}

function renderTodo() {
    //createShowDiv();
    let showDiv = document.querySelector('.js-show-todo');
    todoListArray.forEach((todo, index) => {
        const { todoInput, todoDateInput } = todo;
        const html = `<div class="css-all css-todo">${todoInput}</div>
        <div class="css-all css-date">${todoDateInput}</div>
        <button onclick="
            todoListArray.splice(${index},1);
            todoHTML = '';
            renderTodo();
        " class="js-delete-button css-all css-delete-button">Delete</button>`;
        todoHTML += html;
    })
    showDiv.innerHTML = todoHTML;
    //console.log(todoHTML);
}
/*
*(Experimental)
function createShowDiv(){
    const flag = document.querySelector('.js-show-todo');
    if(flag){
        flag.remove()
    }
    const newShowDiv = document.createElement('div');
    newShowDiv.classList.add('js-show-todo','css-all','css-show-todo');

    document.querySelector('.js-add-button').insertAdjacentElement("afterend",newShowDiv);
}
*/