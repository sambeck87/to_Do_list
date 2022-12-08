const checkbox = () => {
  const checkIn = document.querySelectorAll('.check');
  checkIn.forEach((element) => {
    element.addEventListener('change', () => {
      const text = document.getElementById(element.value);
      text.classList.toggle('cross_out');
      const val = element.value;
      let allData = localStorage.getItem('tasks');
      allData = JSON.parse(allData);
      if (text.classList.contains('cross_out')) {
        allData[val].complete = true;
        allData = JSON.stringify(allData);
        localStorage.setItem('tasks', allData);
      } else {
        allData[val].complete = false;
        allData = JSON.stringify(allData);
        localStorage.setItem('tasks', allData);
      }
    });
  });
};

export default checkbox;
