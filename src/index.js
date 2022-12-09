import './style.css';
import './images/refresh.svg';
import './images/enter.svg';

import display from './modules/display.js';
import backgroud from './modules/back_groud.js';
import checkbox from './modules/check_box.js';
import NewTask from './modules/constructor.js';
import restIndex from './modules/rest_index.js';
import Tasks from './modules/add_remove.js';
import setup from './modules/setup.js';

display();
backgroud();
checkbox();
window.addEventListener('load', setup);

let index;
let check = localStorage.getItem('tasks');
check = JSON.parse(check);
if (check === null) {
  index = 0;
} else {
  index = check.length;
}

const inTask = document.getElementById('add');

inTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const task = inTask.value;
    const taskDesc = task;
    index += 1;
    const newTask = new NewTask(taskDesc, false, index);
    let storage = localStorage.getItem('tasks');
    storage = JSON.parse(storage);
    const call = new Tasks(newTask, storage, index);
    call.add();
  }
});

const clear = document.getElementById('clear_btn');
clear.addEventListener('click', () => {
  const call = new Tasks(null, true, index);
  call.remove();
  restIndex();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

const modify = document.querySelectorAll('.description');
modify.forEach((element) => {
  element.addEventListener('input', () => {
    const index = parseInt(element.id, 10);
    let allTasks = localStorage.getItem('tasks');
    allTasks = JSON.parse(allTasks);
    allTasks[index].description = element.value;
    allTasks = JSON.stringify(allTasks);
    localStorage.setItem('tasks', allTasks);
  });
});

const trash = document.querySelectorAll('.btn');
trash.forEach((element) => {
  element.addEventListener('click', () => {
    const val = element.value;
    const justOne = new Tasks(null, null, val);
    justOne.deleteOne();
    restIndex();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
});

const eraseBtn = document.getElementById('refres_icon');
eraseBtn.addEventListener('click', () => {
  localStorage.clear();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

const dragBtn = document.querySelectorAll('.icon');
dragBtn.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    const value = btn.value;

    const sibilings = document.querySelectorAll('.center');
    sibilings.forEach(element => {
      element.addEventListener('dragover', (e) => {
        e.preventDefault();
      })
      element.addEventListener('drop', () => {
        const sibilingId = element.id;
        let index = sibilingId.replace(/[^0-9]/g, "");
        let allData = localStorage.getItem('tasks');
        allData = JSON.parse(allData);
        const temp = allData.splice(value, 1);
        let arr1 = [...allData];
        let arr2 = [...allData];
        arr2 = arr1.splice(0, index);
        console.log(arr1);
        console.log(arr2);
        //console.log(temp);
        let arr = [...arr2, ...temp, ...arr1];
        console.log(arr);
        arr = JSON.stringify(arr);
        localStorage.setItem('tasks', arr);
        restIndex();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
    });
  })
});
