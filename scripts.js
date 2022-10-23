const frontArrow = document.querySelector(".fa-arrow-right");
const backArrow = document.querySelector(".fa-arrow-left");
const cardsContainer = document.querySelector(".cards-container");
const innerCard = document.querySelector(".inner-card");
const saveCardInLS = document.querySelector(".add-card-btn");
const addCardContainer = document.querySelector(".add-card-container");
const questionInput = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const btnSmall = document.querySelector(".btn-small");
const clearCardsBtn = document.querySelector(".clear-cards-btn");
const currentCard = document.querySelector(".current-card");
let currentCardIndex = 0;
let cardsArr = [];

let cardsObjArr = localStorage.getItem("cards") !== null ? JSON.parse(localStorage.getItem("cards")) : [];

//Event lsitener
btnSmall.addEventListener("click", showAddCard);
frontArrow.addEventListener("click", showNextCard);
backArrow.addEventListener("click", showPrevCard);
saveCardInLS.addEventListener("click", guardarTarjetaEnLS);
clearCardsBtn.addEventListener("click", clearCards);
//actualizar el DOM
function updateDOM() {
   cardsObjArr.forEach((cardObj) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="inner-card ">
            <div class="inner-card-front">
                <p>${cardObj.pregunta}</p>
            </div>
            <div class="inner-card-back">${cardObj.respuesta}</div>
        </div>
        
        `;

      cardsArr.push(card);

      populateDOM();
   });

   showActuaCardInNavigationMenu();
}

function showActuaCardInNavigationMenu() {
   currentCard.textContent = `
         ${currentCardIndex + 1} / ${cardsObjArr.length}
      
      `;
}

function clearCards(e) {
   localStorage.removeItem("cards");
   cardsContainer.innerHTML = "";
   currentCard.textContent = "0 / 0 ";
}

function guardarTarjetaEnLS() {
   const question = questionInput.value;
   const answer = answerInput.value;
   if (question !== "" && answer !== "") {
      let card = {
         pregunta: question,
         respuesta: answer,
      };

      questionInput.value = "";

      answerInput.value = "";

      cardsObjArr.push(card);

      localStorage.setItem("cards", JSON.stringify(cardsObjArr));
      updateDOM();
   }
}

function showNextCard() {
   cardsArr[currentCardIndex].className = "card right";

   currentCardIndex = currentCardIndex + 1;

   if (currentCardIndex > cardsArr.length - 1) {
      currentCardIndex = cardsArr.length - 1;
   }
   cardsArr[currentCardIndex].className = " card active";
   showActuaCardInNavigationMenu();
}

function showPrevCard() {
   cardsArr[currentCardIndex].className = "card left";

   currentCardIndex = currentCardIndex - 1;

   if (currentCardIndex < 0) {
      currentCardIndex = 0;
   }
   cardsArr[currentCardIndex].className = " card active";
   showActuaCardInNavigationMenu();
}

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
   addCardContainer.style.display = "flex";
   const closeAddCardContainer = document.querySelector(".btn-ghost");

   closeAddCardContainer.addEventListener("click", closeAddCardContainerFunc);
}

function closeAddCardContainerFunc() {
   addCardContainer.style.display = "none";
}

updateDOM();
