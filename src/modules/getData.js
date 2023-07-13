export const main = document.querySelector('.container');

let tasks = [];
tasks;
const getData = () => {
  tasks = JSON.parse(localStorage.getItem('datas')) ?? [];
  main.innerHTML = '';
  /* eslint-disable */
  document.body.appendChild(component());
  /* eslint-enable */
};

export default getData;
