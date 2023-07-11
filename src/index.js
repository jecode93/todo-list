import './styles/style.css';

const toDoTask = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1
  },
  {
    description: 'Complete to do list project',
    completed: true,
    index: 2
  },
  {
    description: 'Complete ES6 & Webpack module successfully',
    completed: true,
    index: 3
  }
];

const container = document.querySelector('.container');
const header = document.createElement('div');

header.classList.add('todo-header');
header.innerHTML = '<h1>Today\'s To Do</h1>';
header.innerHTML += '<span class="material-symbols-outlined"> sync </span>';
container.appendChild(header);

const form = document.createElement('form');
form.classList.add('form');
form.innerHTML = '<input type="text" class="task-input" placeholder="Add to your list...">'
container.appendChild(form);

const toDoList = () => {
  toDoTask.forEach((task) => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.setAttribute('id', task.index);
    div.innerHTML = `
    <span class="material-symbols-outlined">check_box_outline_blank </span> <p>${task.description} </p> <span class="material-symbols-outlined move-end">more_vert</span>
`;
  container.appendChild(div);
  });
}
toDoList();

const remove = document.createElement('div');
remove.classList.add('remove');
remove.innerHTML = '<p>Clear All Completed</p>';
container.appendChild(remove);
