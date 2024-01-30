let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want another card?")
}
else if (sum === 21) {
  console.log("CONGRATULATIONS...BLACKJACK!!!!!")
}
else if (sum > 21) {
  console.log("Sorry, you're BUST!!!")
}