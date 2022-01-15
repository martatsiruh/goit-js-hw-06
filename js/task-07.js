const inputSizeControlEl = document.querySelector('#font-size-control');
//console.log(inputSizeControlEl);
const textSizeEl = document.querySelector("#text");
//console.log(textSizeEl);

inputSizeControlEl.addEventListener("input", (event) => {
    textSizeEl.style.fontSize = event.currentTarget.value + "px";

})