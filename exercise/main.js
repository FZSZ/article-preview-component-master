window.onload = () => {
  let obj = document.querySelector('object');
  let path = obj.contentDocument.querySelector('path');
  let button = document.querySelector('.share-button');
  let share = document.querySelector('.share');

  document.addEventListener('click', e => {
    if (e.target !== button) {
      return;
    } else {
      share.classList.toggle('active');
      button.classList.toggle('active');
      path.classList.toggle('active');

      if (path.classList == 'active') {
        path.setAttribute('fill', '#ecf2f8');
      } else {
        path.setAttribute('fill', '#6E8098');
      }
    }
  });
}