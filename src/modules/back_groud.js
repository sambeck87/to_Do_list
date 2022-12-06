const backgroud = () => {
  const containers = document.querySelectorAll('.description');
  containers.forEach((element) => {
    element.addEventListener('focus', () => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      cont.classList.add('yellow');
      cont.classList.remove('white');
    });
  });

  containers.forEach((element) => {
    element.addEventListener('blur', () => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      cont.classList.add('white');
      cont.classList.remove('yellow');
    });
  });

  containers.forEach((element) => {
    element.addEventListener('keypress', (event) => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      if (event.key === 'Enter') {
        cont.classList.remove('yellow');
      }
    });
  });
};

export default backgroud;
