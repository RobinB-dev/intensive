// Creating variables from the overlay

const pseudoInput = document.querySelector('.pseudoInput')
const confirmButton = document.querySelector('.confirmButton')
const playerName = document.querySelector('.name_player')
const overlay = document.querySelector('.overlayName')

// Put the player name in the right place and remove the overlay when click on confirm 

// confirmButton.addEventListener('click', () =>
// {
//    console.log(pseudoInput.value)
//    playerName.textContent = `${pseudoInput.value} (you)`
   
//    // The player can't confirm if he doesn't enter a value

//    if(pseudoInput.value != 0)
//    {
//    overlay.style.display = 'none'
//    }
// })

//Table with 106 cards, attribut : nick, id, type


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
deck = shuffle(deck)


//images of the card
let card = document.querySelector('.card')
let hand = []


const clickDeck = document.querySelector('.fro')
clickDeck.addEventListener('click',(event) => {
takeCard()
})

//card slot (positions)
let card1 = 0
let card2 = 0
let card3 = 0
let card4 = 0
let card5 = 0
let card6 = 0

function takeCard() {
  const card = deck.pop()
  hand.push(card)
  // to pick up a random card from the deck and put it in the hand
  const nick = hand.map(hand => `${hand.nick}`)
  const name = [`./images/cards/${nick[0]}.svg`]
  const image = name

  // if it's true the card goes in the hand
  if (card1 == 0) {
    document.querySelector('.card1').src = image
    card1 = 1    
  } else if (card2 == 0) {
    document.querySelector('.card2').src = image
    card2 = 1    
  } else if (card3 == 0) {
    document.querySelector('.card3').src = image
    card3 = 1    
  } else if (card4 == 0) {
    document.querySelector('.card4').src = image
    card4 = 1    
  } else if (card5 == 0) {
    document.querySelector('.card5').src = image
    card5 = 1    
  } else if (card6 == 0) {
    document.querySelector('.card6').src = image
    card6 = 1    
  }
  console.log(card1)
  console.log(card2)
  console.log(card3)
console.log(hand)
}




const moveCard = document.querySelectorAll('.myCards')
for (card of moveCard){ 
  card.addEventListener('click', moveCardFunc)
}
function moveCardFunc() {
  let getIndex = this.classList[1].substr(4)
  console.log(hand)
  const nick = hand.map(hand => `${hand.nick}`).reverse()
  const type = hand.map(hand => `${hand.type}`).reverse()
  const moveSRC = [`./images/cards/${nick[parseInt(getIndex-1)]}.svg`]
  const placeType = '.' + type[0]
  console.log(placeType)  
  document.querySelector(placeType).src = moveSRC
  this.src = ''
  card1 = 0
  console.table(hand)
  console.table(nick)
  console.table(type)
  console.log(this.classList[1])
  this.classList1
  
  if (this.classList[1] === "card1") {
    card1 = 0
  } else if (this.classList[1] === "card2") {
    card2 = 0
  } else if (this.classList[1] === "card3") {
    card3 = 0
  } else if (this.classList[1] === "card4") {
    card4 = 0
  } else if (this.classList[1] === "card5") {
    card5 = 0
  } else if (this.classList[1] === "card6") {
    card6 = 0    
  }
}
const scroreRobin = 0
const counter = document.querySelector('.overlay')
const speedContainer = document.querySelector('.speed')
