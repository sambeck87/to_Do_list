/*export default function setup() {
  let allTasks = localStorage.getItem('tasks');
  allTasks = JSON.parse(allTasks);
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].complete = false;
  }
  allTasks = JSON.stringify(allTasks);
  localStorage.setItem('tasks', allTasks);
}*/

export default function setup() {
  let allTasks = localStorage.getItem('tasks');
  allTasks = JSON.parse(allTasks);
  for (let i = 0; i < allTasks.length; i += 1) {
    const num = allTasks[i].index;
    if(allTasks[i].complete === true){
      const text = document.getElementById(i);
      text.classList.add('cross_out');
      const box = document.getElementById(`task${num}`);
      box.checked = true;
    }
  }
}