const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getId = document.querySelector('#ingredients');

for (let element of ingredients) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.innerHTML = element;
  getId.append(ingredientsItem);
}

console.log(getId);