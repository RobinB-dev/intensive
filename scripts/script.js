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

const deck = [200,200,200,200,100,100,100,100,100,100,100,100,100,100,100,100,75,75,75,75,75,75,75,75,75,75]

const randowmCard = Math.ceil(Math.random()*26)

const deckCard = document.querySelector('.card')


deckCard.src = deck [randowmCard-1]

console.log(deckCard.src)