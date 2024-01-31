let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum < 21) {
  message = "Do you want another card?"
}
else if (sum === 21) {
  message = "CONGRATULATIONS...BLACKJACK!!!!!"
  hasBlackjack = true
}
else {
  message = "Sorry, you're BUST!!!"
  isAlive = false
}

console.log(message)