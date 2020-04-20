// Creating variables to create the event

let playerName = document.querySelector('.player_4')
const inputName = document.querySelector('.inputName')
const confirmButton = document.querySelector('.confirmButton')

// When click, place player name in his place 

confirmButton.addEventListener('click', (event) => 
{
  playerName.textContent = inputName.value
})
