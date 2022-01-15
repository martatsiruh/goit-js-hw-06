const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef= document.querySelector('#value');
//console.log(valueRef);

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
    console.log("counterValue:", counterValue)
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
    console.log("counterValue:", counterValue)
})