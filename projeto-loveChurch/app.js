//Efeito Máquina de Escrever

function typeWrite(e) {
    const textArray = e.innerHTML.split('');
    e.innerHTML = '';

    textArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 120 * i) //A função passa para cada letra da const phrase um tempo de 120ms para impressão
    });
}

const phrase = document.querySelector('.title');

typeWrite(phrase);
