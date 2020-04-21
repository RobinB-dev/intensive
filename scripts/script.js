// Creating variables to create the event

let playerName = document.querySelector('.player_4')
const inputName = document.querySelector('.inputName')
const confirmButton = document.querySelector('.confirmButton')
let playerPseudo = document.querySelector('.playerPseudo')

// When click, place player name in his place and hides the question
confirmButton.addEventListener('click', (event) => 
{
  playerName.textContent = inputName.value
  playerPseudo.style.display = 'none'
})