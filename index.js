document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = taskText;

        const buttonGroup = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.className = 'btn btn-success btn-sm';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(deleteButton);
        li.appendChild(buttonGroup);
        todoList.appendChild(li);
    }
});
