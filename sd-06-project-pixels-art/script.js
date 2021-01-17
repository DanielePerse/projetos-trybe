function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function changeColor() {
  const buttonSelected = document.querySelector('.selected');
  buttonSelected.classList.remove('selected');
  this.classList.add('selected');
}

function setColorClick() {
  const buttonColor = document.querySelector('.selected');
  this.style.backgroundColor = buttonColor.style.backgroundColor;
}

window.onload = function () {
  const blackPalette = document.getElementById('black-palette');
  blackPalette.style.backgroundColor = 'black';
  blackPalette.addEventListener('click', changeColor);

  const greenPalette = document.getElementById('green-palette');
  greenPalette.style.backgroundColor = 'green';
  greenPalette.addEventListener('click', changeColor);

  const yellowPalette = document.getElementById('yellow-palette');
  yellowPalette.style.backgroundColor = 'yellow';
  yellowPalette.addEventListener('click', changeColor);

  const bluePalette = document.getElementById('blue-palette');
  bluePalette.style.backgroundColor = 'blue';
  bluePalette.addEventListener('click', changeColor);

  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', clear);

  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', setColorClick);
  }
};
