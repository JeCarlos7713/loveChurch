//Cards

const divCards = document.querySelector("div.cards");
const card = document.querySelector("div.card");

const content = [
    {
        img: "./img/card-teen.jpg",
        title: "Jovens",
        id: "1"
    },
    {
        img: "./img/card-woman.jpg",
        title: "Mulheres",
        id: "2"
    },
    {
        img: "./img/card-child.jpg",
        title: "Crianças",
        id: "3"
    }
];

content.map(contain => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", contain.id);
    cardClone.querySelector("img").src = contain.img;
    cardClone.querySelector(".title-departament > h3").innerHTML = contain.title;
    divCards.appendChild(cardClone);
});



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
//Efeito Máquina de Escrever