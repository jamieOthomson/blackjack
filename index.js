let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
  let randomNumber =  Math.floor( Math.random()*13 ) + 1
  if (randomNumber === 1) {
      return 11
  } else if (randomNumber > 10) {
      return 10
  } else {
      return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum < 21) {
    message = "Do you want another card?"
  }
  else if (sum === 21) {
    message = "Congratulations, you WON!!!!!"
    hasBlackjack = true
  }
  else {
    message = "Sorry, you're BUST!!!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}