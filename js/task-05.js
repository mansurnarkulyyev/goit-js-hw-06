const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;

});


// textInput.addEventListener("blur", () => {
//     textInput.value = "";
// });
// textInput.addEventListener("click", () => {
//     textInput.focus();
// });

// output.addEventListener("click", () => {
//     output.blur();
// });

// textInput.addEventListener("focus", (event) => {
//     event.target.value = "";
// });

