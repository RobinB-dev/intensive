
var img = document.querySelectorAll("img");
img.onerror = function () { 
    this.style.display = "none";
}

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
  // hand.splice(0,0,deck [Math.floor(Math.random()*deck.length)])
  // o++
  const nick = hand.map(hand => `${hand.nick}`).reverse()
  
  // const nick = hand.map(hand => `${hand.nick}`)
  const name = [`./images/cards/${nick[0]}.svg`]
  const image = name


  // if it's true the card goes in the hand
  if (card1 == 0) {
    console.log(hand);
    hand.splice(0, 1, card);
    document.querySelector('.card1').src = image
    card1 = 1    
  } else if (card2 == 0) {
    hand.splice(1, 1, card);
    document.querySelector('.card2').src = image
    card2 = 1    
  } else if (card3 == 0) {
    hand.splice(2, 1, card);
    document.querySelector('.card3').src = image
    card3 = 1    
  } else if (card4 == 0) {
    hand.splice(3, 1, card);
    document.querySelector('.card4').src = image
    card4 = 1    
  } else if (card5 == 0) {
    hand.splice(4, 1, card);
    document.querySelector('.card5').src = image
    card5 = 1    
  } else if (card6 == 0) {
    hand.splice(5, 1, card);
    document.querySelector('.card6').src = image
    card6 = 1    
  }
}




const moveCard = document.querySelectorAll('.myCards')
for (card of moveCard){ 
  card.addEventListener('click', moveCardFunc)
}
let placeType = ''
function moveCardFunc() {
  let getIndex = this.classList[1].substr(4)
  // console.log(hand)
  const nick = hand.map(hand => `${hand.nick}`)
  const type = hand.map(hand => `${hand.type}`)
  const distance = hand.map(hand => `${hand.distance}`)
  const moveSRC = [`./images/cards/${nick[parseInt(getIndex-1)]}.svg`]

  // this.style.transform = "translate(0px, -80px)";
  // this.src = ''
  // const groume = this.classList[1]
  
  let scorePlayer2 = 0
  
  window.onclick = function(e) {
    const newPlace = e.srcElement.className;  
    console.log(newPlace)  
    const lastFour = '.' + newPlace.substr(newPlace.length - 4);
    const firstFour = newPlace.substring(0, 4);
    console.log(lastFour)
    const typeCard = type[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    const distanceCard = distance[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    // console.log(distanceCard);
    // console.log(typeCard);
    // console.log(scorePlayer2);
    const trash = []
    
    
    if (typeCard == 'attack' || typeCard == 'defense') {
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    } else if (typeCard == 'speed'){      
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    } else if (typeCard == 'asset'){      
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    } else if (typeCard == 'limite' || typeCard == 'limite_def'){      
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
    }

    if (firstFour == 'card') {
      document.querySelector(lastFour).src = moveSRC
    } else {      
    }
  }
  // place2 (groume, type, moveSRC)

  // document.querySelector('.attack').addEventListener("click", function(){
  //   place2 (groume, type, moveSRC);
  // // }, false);
}



function place2 (groume, type, moveSRC){
  console.log("pizza");  
  if (groume === 'card1') {
    placeType = '.' + type[0]
    document.querySelector(placeType).src = moveSRC
    card1 = 0
  } else if (groume === 'card2') {
    placeType = '.' + type[1]
    document.querySelector(placeType).src = moveSRC
    card2 = 0
  } else if (groume === 'card3') {
    placeType = '.' + type[2]
    document.querySelector(placeType).src = moveSRC
    card3 = 0
  } else if (groume === 'card4') {
    placeType = '.' + type[3]
    document.querySelector(placeType).src = moveSRC
    card4 = 0
  } else if (groume === 'card5') {
    placeType = '.' + type[4]
    document.querySelector(placeType).src = moveSRC
    card5 = 0
  } else if (groume === 'card6') {
    placeType = '.' + type[5]
    document.querySelector(placeType).src = moveSRC
    card6 = 0    
  }
}


function place3 (){
  console.log("fromage");  
  document.querySelector('.bin').addEventListener("click", place4);
  document.querySelector('.speed').style.backgroundColor = "#79b8ff18";
}

function place4 (){
  console.log("raclette"); 
  document.querySelector('.fro').style.backgroundColor = "#79b8ff18";
}

const  player1Attack = document.querySelector('.player1Attack')
const  player3Attack = document.querySelector('.player3Attack')
const  player4Attack = document.querySelector('.player4Attack')
const clickTrash = document.querySelector('.bin')
clickTrash.addEventListener('click', (event) => {
  
})
// console.log(player3Attack)