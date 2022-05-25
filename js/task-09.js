
const btnBgColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


console.log("click");
btnBgColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
})



