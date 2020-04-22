// Import json
var request = new XMLHttpRequest();
request.open("GET","./json/cards.json", false);
request.send(null);
var deck = JSON.parse(request.responseText);

// Creating variables from the overlay

const pseudoInput = document.querySelector('.pseudoInput')
const confirmButton = document.querySelector('.confirmButton')
const playerName = document.querySelector('.name_player')
const overlay = document.querySelector('.overlayName')





console.log(deck)
const randomCard = Math.ceil(Math.random()*106)

let i = 1;
let card = document.querySelector('.card')
let hand = []

// fro, ça veut dire quoi ??
const fro = document.querySelector('.fro')
fro.addEventListener('click',(event) => {
takeCard()
})


let card1 = 0
let card2 = 0
let card3 = 0
let card4 = 0
let card5 = 0
let card6 = 0

let o = 0
function takeCard() {
  hand.splice(0,0,deck [Math.ceil(Math.random()*106-o)-1])
  o++
  const nick = hand.map(hand => `${hand.nick}`)
  const chain1 = ['./images/cards/']
  const chain2 = nick[0]
  const chain3 = ['.svg']
  // const place = '.card' + i
  const image = chain1+chain2+chain3
  //console.log(place)
  i++
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
  // console.log(this.classList[1].substr(4));
// console.log(hand);
const id = hand.map(hand => `${hand.id}`)
const placeId = id[1]
// console.log(placeId)
// console.log(deckOne)
j = 0
j++
deck.splice(placeId-j,1)
console.log(deck)
// console.log(deckOne.indexOf(hand[1]))

}



const moveCard = document.querySelectorAll('.myCards')
for (card of moveCard){ 
  card.addEventListener('click', moveCardFunc)
}
function moveCardFunc() {
  var getIndex = this.classList[1].substr(4)
  console.log(hand);
  const nick = hand.map(hand => `${hand.nick}`).reverse()
  const type = hand.map(hand => `${hand.type}`).reverse()
  const moveSRC = [`./images/cards/${nick[parseInt(getIndex-1)]}.svg`]
  const placeType = '.' + type[0]
  console.log(placeType);  
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
