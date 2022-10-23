const frontArrow = document.querySelector(".fa-arrow-right");
const backArrow = document.querySelector(".fa-arrow-left");
const cardsContainer = document.querySelector(".cards-container");
const innerCard = document.querySelector(".inner-card");

const addCardContainer = document.querySelector('.add-card-container')
const btnSmall = document.querySelector('.btn-small')

let currentCardIndex = 0;
let cardsArr = [];

let cardsObjArr = [
   {
      question: "Ques es Javascript",
      answer: "Es un lenguaje de programacion",
   },
   {
      question: "Ques es html ",
      answer: "Es el lenguaje de estructurado de paginas web",
   },
   {
      question: "que es Node ",
      answer: "Node es el lenguaje de programacion que permite correr Javascript fuera de una pagina web",
   },
   {
      question: "Que es PHP ",
      answer: "Es un lenguaje de programacion",
   },
];
btnSmall.addEventListener('click', showAddCard)
frontArrow.addEventListener("click", showNextCard);
backArrow.addEventListener("click", showPreCard);

function updateDOM() {
   cardsObjArr.forEach((cardObj) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="inner-card ">
            <div class="inner-card-front">
                <p>${cardObj.question}</p>
            </div>
            <div class="inner-card-back">${cardObj.answer}</div>
        </div>
        
        `;

      cardsArr.push(card);

      populateDOM();
   });
}

function showNextCard() {
   cardsArr[currentCardIndex].className = "card left";

   currentCardIndex = currentCardIndex + 1;

   if (currentCardIndex > cardsArr.length - 1) {
      currentCardIndex = cardsArr.length - 1;
   }
   cardsArr[currentCardIndex].className = " card active";
}

function showPreCard() {
   cardsArr[currentCardIndex].className = "card left";

   currentCardIndex = currentCardIndex - 1;

   if (currentCardIndex < 0) {
      currentCardIndex = 0;
   }
   cardsArr[currentCardIndex].className = " card active";
}

updateDOM();

function populateDOM() {
   cardsArr.forEach((cardInArr, index) => {
      if (index === 0) {
         cardInArr.classList.add("active");
      }

      cardsContainer.appendChild(cardInArr);
   });

   const cards = document.querySelectorAll(".card");

   cards.forEach((card) => {
      card.addEventListener("click", flipCard);
   });
}

// mostrar siguiente tarjeta

function flipCard() {
   this.classList.toggle("show-answer");
}


function showAddCard() {
addCardContainer.style.display = 'flex'
const closeAddCardContainer = document.querySelector('.btn-ghost')

closeAddCardContainer.addEventListener('click', closeAddCardContainerFunc)

}


function closeAddCardContainerFunc() {
addCardContainer.style.display = 'none'

}