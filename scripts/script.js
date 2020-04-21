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
// array of deck 


const deck = [200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225]
const trashCard = document.querySelector('.trashcard')
const deckCard = document.querySelector('.deckcard')

deckCard.addEventListener('click', (event) => 
{
// When click, 
  const randomCard = Math.ceil(Math.random()*26)

  const card = document.querySelector('.card')
  
  card.src = deck [randomCard-1]

  deck.splice(deck.indexOf(card.src),1)
 


  console.log(trashcard)
  console.log(deck.indexOf(card.src))
  console.log(card.src)
  console.log(deck)
})


trashCard.addEventListener('click',() =>{

  deck.push(trashCard)
})


