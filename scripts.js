const frontArrow = document.querySelector(".fa-arrow-left");
const backArrow = document.querySelector(".fa-arrow-right");
const cardsContainer = document.querySelector(".cards-container");
const innerCard = document.querySelector(".inner-card");

let currentCard = 0;
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
];



function updateDOM() {
   cardsObjArr.forEach((cardObj) => {
      const card = document.createElement("div");
      card.classList.add('card')
      card.innerHTML = `
        <div class="inner-card ">
            <div class="inner-card-front">
                <p>${cardObj.question}</p>
            </div>
            <div class="inner-card-back">${cardObj.answer}</div>
        </div>
        
        `;

        cardsArr.push(card)


      populateDOM()     

   });



}

updateDOM() 

function populateDOM() {
   cardsArr.forEach((cardInArr, index) => {
      if(index === 0) {
         cardInArr.classList.add ('active')
      }


      cardsContainer.appendChild(cardInArr)
   })

   const cards = document.querySelectorAll('.card')

   cards.forEach(card => {
      card.addEventListener('click', flipCard)
   })
   
}
 
function flipCard() {
   this.classList.toggle('show-answer')
}
   


console.log(cardsArr[0])