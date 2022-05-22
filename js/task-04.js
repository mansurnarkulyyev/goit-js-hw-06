const wrapperId = document.querySelector('#counter ');
const spanIdValue = document.querySelector('#value');
const addBtn = document.querySelector("[data-action='decrement']");
const reduce = document.querySelector("[data-action='increment']")

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    document.querySelector('#value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    document.querySelector('#value').textContent = counterValue;
};

reduce.addEventListener('click', increment);
addBtn.addEventListener('click', decrement);