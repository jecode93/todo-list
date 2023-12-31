const removeTask = (i) => {
  let tasks = JSON.parse(localStorage.getItem('datas'));
  tasks = tasks.filter((task) => task.description !== tasks[i].description);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('datas', JSON.stringify(tasks));
};

const removeAllTask = () => {
  let tasks = JSON.parse(localStorage.getItem('datas'));

  tasks = tasks.filter((task) => !task.completed);

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('datas', JSON.stringify(tasks));
};

export { removeTask, removeAllTask };