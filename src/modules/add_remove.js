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
      let allTasks = localStorage.getItem('tasks');
      allTasks = JSON.parse(allTasks);
      let filtr = allTasks.filter((done) => done.complete === false);
      filtr = JSON.stringify(filtr);
      localStorage.setItem('tasks', filtr);
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
