/**Напиши скрипт:


Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const listAllProduct = document.querySelector('#categories');
//console.log(listAllProduct); - виводиться ul в консоль з HTML-документа

const categoriesProduct = document.querySelectorAll('.item');
//console.log(categoriesProduct); - масив з li
const categoriesProductLength = categoriesProduct.length;
console.log('Number of categories:', categoriesProductLength);

categoriesProduct.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.childNodes[3].children.length);
    //console.log('Elements:', element.lastElementChild.children.length);
});