window.onload = () => {
  let obj = document.querySelector('object');
  let path = obj.contentDocument.querySelector('path');
  let button = document.querySelector('.share-button');
  let share = document.querySelector('.share');

  const result = (to) => {
    share.classList[to]('active');
    button.classList[to]('active');
    path.classList[to]('active');
    
    if (path.classList == 'active') {
      path.setAttribute('fill', '#ecf2f8');
    } else {
      path.setAttribute('fill', '#6E8098');
    }
  }

  document.addEventListener('click', e => {
    if (e.target !== button) {
      result('remove'); 
    } else {
      result('toggle');
    }
  });
}