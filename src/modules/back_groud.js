const backgroud = () => {
  const containers = document.querySelectorAll('.description');
  containers.forEach((element) => {
    element.addEventListener('focus', () => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      cont.classList.add('yellow');
      cont.classList.remove('white');
      const dots = `.dot${element.id}`;
      const toHide = document.querySelector(dots);
      toHide.classList.add('hide');
      const btn = `trash${element.id}`;
      const trashBtn = document.getElementById(btn);
      trashBtn.classList.remove('hide');
    });
  });

  containers.forEach((element) => {
    element.addEventListener('blur', () => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      cont.classList.add('white');
      cont.classList.remove('yellow');
      const dots = `.dot${element.id}`;
      const toHide = document.querySelector(dots);
      toHide.classList.remove('hide');
      const btn = `trash${element.id}`;
      const hide = () => {
        const trashBtn = document.getElementById(btn);
        trashBtn.classList.add('hide');
      };
      setTimeout(hide, 150);
    });
  });

  containers.forEach((element) => {
    element.addEventListener('keypress', (event) => {
      const numCont = `cont${element.id}`;
      const cont = document.getElementById(numCont);
      if (event.key === 'Enter') {
        cont.classList.remove('yellow');
        const dots = `.dot${element.id}`;
        const toHide = document.querySelector(dots);
        toHide.classList.remove('hide');
        const btn = `trash${element.id}`;
        const trashBtn = document.getElementById(btn);
        trashBtn.classList.add('hide');
      }
    });
  });
};

export default backgroud;
