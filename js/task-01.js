
const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);

const categoryListItemEl = Array.from(document.querySelector('#categories').children);
for (let element of categoryListItemEl) {
    const category = element.firstElementChild.textContent;
    const quantityElem = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};



// const categoryListItemEl = document.querySelectorAll('.item ul');
// // console.log(categoryListItemEl);
// const categoryTitleEl = document.querySelectorAll('.item h2')

// categoryListItemEl.append(categoryTitleEl);

// console.log(categoryListItemEl);

// categoryListItemEl.forEach((element) => {
//     const listItemEl = element.querySelectorAll('li');
//     console.log(`Elements:${listItemEl.length}`);
// })



// console.log('Category:', categoryTitleEl[0].textContent);

// console.log('Category:', categoryTitleEl[1].textContent);

// console.log('Category:', categoryTitleEl[2].textContent);


// Второй вариант ElementInternals.length

// console.log(`Elements: ${categoryListItemEl[0].children.length}`);
// console.log(`Elements: ${categoryListItemEl[1].children.length}`);
// console.log(`Elements: ${categoryListItemEl[2].children.length}`);
