const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getId = document.querySelector('#ingredients');


const createItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  return li;
};


const itemsArr = ingredients.map(item => {
  return createItem(item);
});

getId.append(...itemsArr)

