// Creating variables to create the event

let playerName = document.querySelector('.player_4')
const inputName = document.querySelector('.inputName')
const confirmButton = document.querySelector('.confirmButton')
const playerPseudo = document.querySelector('.playerPseudo')

import * as myTable from './myTable.js'

const chain1 = ['./images/cards/']
const chain3 = ['.svg']
console.log(deck)
const randomCard = Math.ceil(Math.random()*106)

let card = document.querySelector('.card')
let hand = []
takeCard()
function takeCard() {
  hand.splice(1,0,myTable [Math.ceil(Math.random()*106)-1])
  
  hand.splice(2,1,myTable [Math.ceil(Math.random()*106)-1])
  hand.splice(3,1,myTable [Math.ceil(Math.random()*106)-1])
  hand.splice(4,1,myTable [Math.ceil(Math.random()*106)-1])
  hand.splice(5,1,myTable [Math.ceil(Math.random()*106)-1])
  hand.splice(6,1,myTable [Math.ceil(Math.random()*106)-1])
  const nick = hand.map(hand => `${hand.nick}`)
  console.log(nick)
  const chain2 = nick[1]
  
  const image = chain1+chain2+chain3
  document.querySelector(".card").src = image
  console.log(image)
  console.log (chaine2)
}

