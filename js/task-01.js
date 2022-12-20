
const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);

const categoryListItemEl = Array.from(document.querySelector('#categories').children);
for (let element of categoryListItemEl) {
    const category = element.firstElementChild.textContent;
    const quantityElem = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};

