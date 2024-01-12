const inputField = document.getElementById('inputField');
const referenceWord = 'Hallo';

inputField.addEventListener('input', () => {
    const enteredText = inputField.innerText;
    let l=enteredText.length;

    for (let i = 0; i < l; i++) {

        if (referenceWord[i] === enteredText[i]) {
            let range = document.createRange();
            range.setStart(inputField.childNodes[0], i);
            range.setEnd(inputField.childNodes[0], i+1);
            let selection = window.getSelection();
            selection.addRange(range)
            //selection.getRangeAt(0);
            //inputField.setSelectionRange(i, i + 1);
            document.execCommand('foreColor', false, 'green');
            selection.removeAllRanges();
            range=null
            //inputField.classList.remove('incorrect');
            //inputField.classList.add('correct');
        } else {
            let range = document.createRange();
            range.setStart(inputField.childNodes[0], i);
            range.setEnd(inputField.childNodes[0], i+1);
            let selection = window.getSelection();
            selection.addRange(range);
            //inputField.setSelectionRange(i, i + 1);
            document.execCommand('foreColor', false, 'red');
            selection.removeAllRanges();
            range=null
            //inputField.classList.remove('correct');
            //inputField.classList.add('incorrect');
        }
    }
});

