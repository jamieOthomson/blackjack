let firstCard = 7
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
  let card = 4
  sum += card
  renderGame()
}