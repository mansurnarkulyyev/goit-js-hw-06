
const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);


const categoryTitleEl = document.querySelectorAll('.item h2')

const categoryListItemEl = document.querySelectorAll('.item ul');

// Первый вариант ElementInternals.length

console.log('Category:', categoryTitleEl[0].textContent);
console.log(`Elements: ${categoryListItemEl[0].children.length}`);

console.log('Category:', categoryTitleEl[1].textContent);
console.log(`Elements: ${categoryListItemEl[1].children.length}`);

console.log('Category:', categoryTitleEl[2].textContent);
console.log(`Elements: ${categoryListItemEl[2].children.length}`);


// Второй вариант ElementInternals.length

// categoryListItemEl.forEach((element) => {
//     const listItemEl = element.querySelectorAll('li');
//     console.log(`Elements:${listItemEl.length}`);
// })
