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