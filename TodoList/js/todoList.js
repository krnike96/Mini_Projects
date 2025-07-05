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
    }else{
        alert("Either Todo or Date is invalid!");
    }
}

function renderTodo() {
    let showDiv = document.querySelector('.js-show-todo');
    todoListArray.forEach((todo, index) => {
        const { todoInput, todoDateInput } = todo;
        const html = `<p>${todoInput}</p>
        <p>${todoDateInput}</p>
        <button onclick="
            todoListArray.splice(${index},1);
            todoHTML = '';
            renderTodo();
        " class="js-delete-button">Delete</button>`;
        todoHTML += html;
    })
    showDiv.innerHTML = todoHTML;
    //console.log(todoHTML);
}