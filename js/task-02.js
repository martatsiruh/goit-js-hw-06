

/**В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
//console.log(ingredientsListRef);

const ingredientsEl = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient; // - <li>Potatoes</li> - на кожній ітерації
  item.classList.add('item');
  return item;
});
console.log()

ingredientsListRef.append(...ingredientsEl);