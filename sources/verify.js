const referenceWord = "Hallo";
const editableDiv = document.getElementById('inputField');

editableDiv.addEventListener('input', handleInput);

function setCursorToEnd() {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(editableDiv);
    range.collapse(false);

    selection.removeAllRanges();
    selection.addRange(range);
}

function handleInput() {
    const enteredText = editableDiv.innerText;
    editableDiv.innerHTML = '';

    for (let i = 0; i < enteredText.length; i++) {
        const enteredSymbol = enteredText.charAt(i);
        const referenceSymbol = referenceWord.charAt(i);

        const span = document.createElement('span');
        span.textContent = enteredSymbol;

        if (enteredSymbol === referenceSymbol) {
            span.classList.add('correct');
        } else {
            span.classList.add('incorrect');
        }

        editableDiv.appendChild(span);
    }
    setCursorToEnd();
}
