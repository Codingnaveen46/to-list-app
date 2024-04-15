const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    label.innerText = newTask;
    deleteButton.innerText = 'X';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    newTaskInput.value = '';

  }
});

todoList.addEventListener('change', function(event) {
  const clickedElement = event.target;
  const listItem = clickedElement.parentElement;

  if (clickedElement.type === 'checkbox') {
    listItem.classList.toggle('completed');
  }
});

todoList.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const listItem = clickedElement.parentElement;

  if (clickedElement.innerText === 'X') {
    listItem.remove();
  }
});
