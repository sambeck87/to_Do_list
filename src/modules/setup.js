export default function setup() {
  let allTasks = localStorage.getItem('tasks');
  allTasks = JSON.parse(allTasks);
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].complete = false;
  }
  allTasks = JSON.stringify(allTasks);
  localStorage.setItem('tasks', allTasks);
}