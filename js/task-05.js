const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('input', onInputChange);


function onInputFocus(event) {
    if (event.currentTarget.value === "") {
        refs.span.textContent
    }
    console.log('Privet Ya INPUT FOCUS');
}

function onInputBlur() {
    console.log(refs.span.textContent = 'Anonymous');
}

function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        refs.span.textContent = 'Anonymous'
    }
};


