
let player = {
    name: "Charles",
    chips: 200
}

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message;

let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById('player');
playerEl.textContent = `${player.name}: $ ${player.chips}`


function startGame(){
    let firstCard = randomNumberCard();
    let secondCard = randomNumberCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function randomNumberCard() {
    let random = Math.floor( Math.random() * 13 ) + 1;
    
    if (random  > 10){
        return 10
    }else if (random === 1){
        return 11
    }else{
        return random;
    }
}


function renderGame(){
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card";
    }else if (sum === 21) {
        message = "You`ve got black jack";
        hasBlackJack = true;
    }else {
    message = "You`re out of the game";
        isAlive = false; 
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = randomNumberCard();
        cards.push(card)
        sum += card;
        renderGame();
    }
    
}


