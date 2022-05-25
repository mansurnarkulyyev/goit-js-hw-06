const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

// refs.input.addEventListener('change', onInputChange);//для текста в инпуте нельзя использовать change можно только радио кнопок и чекбексах.
refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('Privet Ya INPUT FOCUS');
}

function onInputBlur() {
    console.log(refs.span.textContent = 'Anonymous!');
    // refs.span.textContent = event.currentTarget.value;
    // console.log(event);

}

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value;
};


// 2v
// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;

// });



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

