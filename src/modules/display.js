import '../images/dots.svg';
import '../images/trash.svg';

const Display = () => {
  let fill = '';
  let data = localStorage.getItem('tasks');
  data = JSON.parse(data);
  if (data === null) {
    return 0;
  }
  for (let i = 0; i < data.length; i += 1) {
    const { description, index } = data[i];
    fill += `<div class="center" id="cont${i}"><input class='check' type="checkbox" name="tasks" id="task${index}" value="${i}"><label for="task${index}" class = "description own"><input type="text" class = "description" id="${i}" value="${description}"></label><img src="./images/dots.svg" alt="move" class="icon dot${i}"><button type="button" id="trash${i}" value="${i}" class="btn hide"><img src="./images/trash.svg" alt="trash"></button></div>`;
  }
  document.getElementById('tasks').innerHTML = `${fill}`;
  return 0;
};

export default Display;
