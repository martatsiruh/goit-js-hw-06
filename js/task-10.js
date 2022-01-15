



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controlEl = document.querySelector('#controls');
//console.log(controlEl);
const inputEl = document.querySelector('input');
//console.log(inputEl);
const buttonCreateEl = document.querySelector('[data-create]');
//console.log(buttonCreateEl);
const buttonDestroyEl = document.querySelector('[data-destroy]');
//console.log(buttonDestroyEl);
const linkBoxesEl = document.querySelector('#boxes');
//console.log(linkBoxesEl);

linkBoxesEl.classList.add('boxes');

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let elem = 1; elem < amount + 1; elem += 1) {
    const newBoxes = document.createElement('div');
    //console.log(newBoxes);
    newBoxes.classList.add('boxes')
    inputEl.textContent = amount.currentTarget;
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxes.style.width = width + 'px';
    newBoxes.style.height = height + 'px';
    width += 10;
    height += 10;
    linkBoxesEl.append(newBoxes);
    console.log(newBoxes);
  }

};

buttonCreateEl.addEventListener("click", (event) => {
  const boxesEl = Number(inputEl.value);
	createBoxes(boxesEl);
});

function destroyBoxes() {
  linkBoxesEl.innerHTML = '';
}

buttonDestroyEl.addEventListener("click", () => {
  destroyBoxes();
})

