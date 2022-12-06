const checkbox = () => {
  const checkIn = document.querySelectorAll('.check');
  checkIn.forEach((element) => {
    element.addEventListener('click', () => {
      const text = document.getElementById(element.value);
      text.classList.toggle('cross_out');
    });
  });
};

export default checkbox;