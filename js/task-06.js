const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const inputDataLength = parseInt(inputEl.dataset.length);
console.log(inputDataLength);

inputEl.addEventListener("blur", (event) => {
    return event.target.value.length === inputDataLength ?
        inputEl.setAttribute('class', 'valid') :
        inputEl.setAttribute('class', 'invalid');

})



//parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.