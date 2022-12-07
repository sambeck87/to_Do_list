export default class Tasks {
  constructor(newTask, storage, index) {
    this.newTask = newTask;
    this.myTasks = storage;
    this.index = index;
  }

  add() {
    if (this.myTasks === null) {
      this.myTasks = [];
    }
    const data = this.myTasks;
    data.push(this.newTask);
    let allData = JSON.stringify(data);
    localStorage.setItem('tasks', allData);
    allData = localStorage.getItem('tasks');
  }

  remove() {
    if (!this.storage) {
      const arr = [];
      let allTasks = localStorage.getItem('tasks');
      allTasks = JSON.parse(allTasks);
      const selected = document.querySelectorAll('.cross_out');
      selected.forEach((element) => {
        const index = parseInt(element.id, 10);
        arr.push(index);
      });
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        const index = arr[i];
        allTasks.splice(index, 1);
      }
      allTasks = JSON.stringify(allTasks);
      localStorage.setItem('tasks', allTasks);
    }
  }

  deleteOne() {
    let allTasks = localStorage.getItem('tasks');
    allTasks = JSON.parse(allTasks);
    allTasks.splice(this.index, 1);
    allTasks = JSON.stringify(allTasks);
    localStorage.setItem('tasks', allTasks);
  }
}
