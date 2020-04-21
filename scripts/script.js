// Creating variables to create the event

let playerName = document.querySelector('.player_4')
const inputName = document.querySelector('.inputName')
const confirmButton = document.querySelector('.confirmButton')
const playerPseudo = document.querySelector('.playerPseudo')

// When click, place player name in his place and hides the question
confirmButton.addEventListener('click', (event) =>
{
  playerName.textContent = inputName.value
  playerPseudo.style.display = 'none'
})

const deck = [200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225]
const randomCard = Math.ceil(Math.random()*26)
const deckCard = document.querySelector('.card')
deckCard.src = deck [randomCard-1]

const indexCard = indexOf(deckCard.src)
console.log(deck.indexOf(deckCard.src))
deck.splice(indexCard,1)
console.log(deckCard.src)
console.log(deck)
