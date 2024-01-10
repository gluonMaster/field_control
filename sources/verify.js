const inputField = document.getElementById('inputField');
const referenceWord = 'Hallo';

inputField.addEventListener('input', () => {
    const enteredText = inputField.value;

    for (let i = 0; i < enteredText.length; i++) {
        if (referenceWord[i] === enteredText[i]) { 
            inputField.classList.remove('incorrect');
            inputField.classList.add('correct');
        } else {
            inputField.classList.remove('correct');
            inputField.classList.add('incorrect');
        }
    }
});
