function getSel(sel) {
    return document.querySelector(sel);
}
let form = document.forms['form'];
let cenzorArray = [];
getSel('.add').addEventListener('click', function () {
    let p = document.createElement('p');
    const duplicatedWord = cenzorArray.find((word) => word === form.badWords.value);
    if (duplicatedWord) {
        alert('This cenzor word already exist');
        return;
    }
    else {
        cenzorArray.push(form.badWords.value);
    }
    p.textContent = `
    ${form.badWords.value + ', '}
    `;
    getSel('.bw').innerHTML += p.textContent;
    form.reset();
});
getSel('.cenzor').addEventListener('click', function () {
    let word_list = form.txt.value.split(" ");
    word_list.forEach((wordFromList, wordIndex) => {
        const cenzorWord = cenzorArray.find((cenzor) => cenzor === wordFromList);
        if (cenzorWord) {
            let stars = "";
            for (var i = 0; i < cenzorWord.length; i++) {
                stars += "*";
            }
            ;
            word_list[wordIndex] = stars;
        }
    });
    let result = word_list.join(' ');
    form.txt.value = result;
});
