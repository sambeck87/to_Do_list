export default function restIndex() {
  let check = localStorage.getItem('tasks');
  check = JSON.parse(check);
  for (let i = 0; i < check.length; i += 1) {
    check[i].index = i + 1;
  }
  check = JSON.stringify(check);
  localStorage.setItem('tasks', check);
}
