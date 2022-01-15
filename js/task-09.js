function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyEl = document.querySelector('body');
//console.log(bodyEl);
const colorChange = document.querySelector('.color');
//console.log(colorChange);
const buttonChangeColor = document.querySelector('.change-color');
//console.log(buttonChangeColor);

buttonChangeColor.addEventListener('click', (event) => {
  const palletColor = getRandomHexColor();
  bodyEl.style.backgroundColor = palletColor;
  //console.log(palletColor);
  colorChange.textContent = palletColor;
  //console.log(colorChange)
});