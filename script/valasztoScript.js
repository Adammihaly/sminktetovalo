let munkaimGaleria = document.getElementById('munkaimGaleria');
let szalonGaleria = document.getElementById('szalonGaleria');

let munkaimGomb = document.getElementById('munkaimGomb');
let szalonGomb = document.getElementById('szalonGomb');

function showMunkaim() {
  szalonGaleria.style.display = 'none';
  munkaimGaleria.style.display = 'flex';

  szalonGomb.classList.remove('aktivGomb');
  szalonGomb.classList.remove('hoverGomb');
  munkaimGomb.classList.add('aktivGomb');
}

function showSzalon() {
  munkaimGaleria.style.display = 'none';
  szalonGaleria.style.display = 'flex';

  munkaimGomb.classList.remove('aktivGomb');
  munkaimGomb.classList.remove('hoverGomb');
  szalonGomb.classList.add('aktivGomb');
}

munkaimGomb.addEventListener('mouseenter', () => {
  if (munkaimGomb.classList.contains('aktivGomb')) {
    return;
  }
  munkaimGomb.classList.add('hoverGomb')
})

munkaimGomb.addEventListener('mouseleave', () => {
  if (munkaimGomb.classList.contains('aktivGomb')) {
    return;
  }
  munkaimGomb.classList.remove('hoverGomb')
})

szalonGomb.addEventListener('mouseenter', () => {
  if (szalonGomb.classList.contains('aktivGomb')) {
    return;
  }
  szalonGomb.classList.add('hoverGomb')
})

szalonGomb.addEventListener('mouseleave', () => {
  if (szalonGomb.classList.contains('aktivGomb')) {
    return;
  }
  szalonGomb.classList.remove('hoverGomb')
})