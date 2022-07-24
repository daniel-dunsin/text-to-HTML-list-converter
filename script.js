const radioButtons = document.querySelectorAll('input[type="radio"]');
const inputTextarea = document.querySelector('.input-el textarea');
const outputTextarea = document.querySelector('.output-el textarea');
const generateBtn = document.querySelector('.btn');
const instructionEl = document.querySelector('.instruction span');
// write the functions for each radio button selected
// new line function
const newLine = (value) => {
    // split the values, map them into HTML list and join them
    const newValue = value.split('\n').map(text=>{
        return `<li>${text.trim('')}</li>\n`;
    }).join('');
    return newValue;
}
// comma function
const comma = (value) => {
    const newValue = value.split(',').map(text=>{
        return `<li>${text.trim('')}</li>\n`;
    }).join('');
    return newValue;
}

// space function
const spaces = (value)=>{
    const newValue = value.split(' ').map(text=>{
        return `<li>${text.trim('')}</li>\n`;
    }).join('');
    return newValue;
}

// an object for selecting functions when the generate button is clicked
const functions = {
    newLine: newLine,
    spaces: spaces,
    comma: comma,
};

radioButtons.forEach(btn=>{
    btn.addEventListener('change', (e)=>{
        const buttonId = e.currentTarget.getAttribute('id');
        instructionEl.textContent = buttonId;
    })
});

generateBtn.addEventListener('click', ()=>{
    // get the id of the checked radio button and call its function, pass the input textarea value into the function
    radioButtons.forEach(btn=>{
        const buttonId = btn.getAttribute('id');
        if(btn.checked){
            const output = functions[buttonId](inputTextarea.value);
            outputTextarea.value = output

        }
    })
    // set the returned value to the output textarea
})