const textInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
//console.log(outputEl);

textInputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value;
    if(textInputEl.value === "")outputEl.textContent = `Anonymous`;
})
