import '../images/dots.svg';

const tasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'sweep the house',
    completed: false,
    index: 1,
  },
  {
    description: 'fold the clothes',
    completed: false,
    index: 2,
  },
];

let fill = '';

const Display = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const { description, index } = tasks[i];
    fill += `<div class="center" id="cont${i}"><input class='check' type="checkbox" name="tasks" id="task${index}" value="${i}"><label for="task${index}" class = "description"><input type="text" class = "description" id="${i}" value="${description}"></label><img src="./images/dots.svg" alt="move" class="icon"></div>`;
  }
  document.getElementById('tasks').innerHTML = `${fill}`;
};

export default Display;
