const button = document.querySelector('.fa-bars');

button.addEventListener('click', () => {
  const nav = document.querySelector('.sidebar');
  const back = document.querySelector('.sidebarBack');
  nav.style.transform = 'translateX(0)';
  back.style.display = 'flex';   
});

const back = document.querySelector('.sidebarBack');

back.addEventListener('click', () => {
  const nav = document.querySelector('.sidebar');
  const back = document.querySelector('.sidebarBack');
  nav.style.transform = 'translateX(200%)';
  back.style.display = 'none';
});

const tudnivalok = document.querySelector('.tudnivalok');

tudnivalok.addEventListener('click', () => {
  const div = document.querySelector('.tudnivalokDiv');
  if(div.style.display === 'none'){
    div.style.display = 'flex';
  } else {
    div.style.display = 'none';
  }
});

const tetovalasok = document.querySelector('.tetovalasok');

tetovalasok.addEventListener('click', () => {
  const div = document.querySelector('.tetovalasokDiv');
  if(div.style.display === 'none'){
    div.style.display = 'flex';
  } else {
    div.style.display = 'none';
  }
});