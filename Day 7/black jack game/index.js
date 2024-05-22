let firstCard
let secondCard
let cards
let sum
let hasBlackJack = false
let isAlive = true
let message = ""

let player = {
  name : "Abid",
  chips: 154
}

let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent += player.name + ": " + "$" + player.chips

function renderGame(){

  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "
  for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }

  if(sum <= 20){
    message = "Do you want to draw new card?"
  }else if(sum === 21){
    message = "you have got black jack!"
    hasBlackJack = true
  }else{
    message = "You are out of the game!"
    isAlive = false
  }

  messageEl.textContent = message;
}

function startGame(){
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function newCard(){
  if(isAlive || hasBlackJack){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame();
  }
}

function getRandomCard(){
  let cardGenerated = Math.floor(Math.random() * 13) + 1;
  // if(cardGenerated === 11){
  //   return 1
  // }
  // else if(cardGenerated === 12 || cardGenerated === 13){
  //   return 10
  // }
  // else{
  //   return cardGenerated
  // }

  return cardGenerated === 11 ? 1:
         cardGenerated === 12 || cardGenerated === 13 ? 10:
         cardGenerated; 
}
