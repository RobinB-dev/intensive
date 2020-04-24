// Creating variables from the overlay

const pseudoInput = document.querySelector('.pseudoInput')
const confirmButton = document.querySelector('.confirmButton')
const playerName = document.querySelector('.name_player')
const overlay = document.querySelector('.overlayName')

// Put the player name in the right place and remove the overlay when click on confirm

confirmButton.addEventListener('click', () =>
{
   console.log(pseudoInput.value)
   playerName.textContent = `${pseudoInput.value} (you)`

   // The player can't confirm if he doesn't enter a value

  if(pseudoInput.value != 0)
  {
    overlay.style.display = 'none'
  }
})

// Table with 106 cards, attribut : nick, id, type


function shuffle(a)
{
  for (let i = a.length - 1; i > 0; i--)
  {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
deck = shuffle(deck)


//images of the card
let card = document.querySelector('.card')
let hand = []


const clickDeck = document.querySelector('.pickCard')
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

function takeCard()
{
  const card = deck.pop()
  hand.push(card)

  // to pick up a random card from the deck and put it in the hand
  const nick = hand.map(hand => `${hand.nick}`).reverse()
  const name = [`./images/cards/${nick[0]}.svg`]
  const image = name


  // if it's true the card goes in the hand
  if (card1 == 0)
  {
    console.log(card1);
    hand.splice(0, 1, card);
    document.querySelector('.card1').src = image
    card1 = 1
    console.log(card1);
  }
  else if (card2 == 0)
  {
    hand.splice(1, 1, card);
    document.querySelector('.card2').src = image
    card2 = 1
  }
  else if (card3 == 0)
  {
    hand.splice(2, 1, card);
    document.querySelector('.card3').src = image
    card3 = 1
  }
  else if (card4 == 0)
  {
    hand.splice(3, 1, card);
    document.querySelector('.card4').src = image
    card4 = 1
  }
  else if (card5 == 0)
  {
    hand.splice(4, 1, card);
    document.querySelector('.card5').src = image
    card5 = 1
  }
  else if (card6 == 0)
  {
    hand.splice(5, 1, card);
    document.querySelector('.card6').src = image
    card6 = 1
  }
}


let clean = ''

const moveCard = document.querySelectorAll('.myCards')
for (card of moveCard)
{
  card.addEventListener('click', moveCardFunc)
}
let placeType = ''
function moveCardFunc()
{
  let getIndex = this.classList[1].substr(4)

  const nick = hand.map(hand => `${hand.nick}`)
  const type = hand.map(hand => `${hand.type}`)
  const distance = hand.map(hand => `${hand.distance}`)
  const moveSRC = [`./images/cards/${nick[parseInt(getIndex-1)]}.svg`]

  window.onclick = function(e)
  {
    const newPlace = e.srcElement.className;
    const lastFour = '.' + newPlace.substr(newPlace.length - 4);
    let lastFive = '.' + newPlace.substr(newPlace.length - 5);
    const firstFour = newPlace.substring(0, 4);
    const typeCard = type[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    const distanceCard = distance[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    if (lastFive == '.card1')
    {
      card1 = 0
      clean = '.card1'
    }
    else if (lastFive == '.card2'){
      card2 = 0
      clean = '.card2'
    }
    else if (lastFive == '.card3'){
      card3 = 0
      clean = '.card3'
    }
    else if (lastFive == '.card4'){
      card4 = 0
      clean = '.card4'
    }
    else if (lastFive == '.card5'){
      card5 = 0
      clean = '.card5'
    }
    else if (lastFive == '.card6'){
      card6 = 0
      clean = '.card6'
    }

    if (typeCard == 'attack' || typeCard == 'defense')
    {
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    }
    else if (typeCard == 'speed')
    {
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    }
    else if (typeCard == 'asset')
    {
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor=''});
    }
    else if (typeCard == 'limite' || typeCard == 'limite_def')
    {
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor='#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor=''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor=''});
    }

    if (firstFour == 'card')
    {
      document.querySelector(lastFour).src = moveSRC
      document.querySelector(clean).src = ''
    }
    else if (firstFour == 'trsh'){
      document.querySelector(clean).src = ''
    }
  }
}




const  player1Attack = document.querySelector('.player1Attack')
const  player3Attack = document.querySelector('.player3Attack')
const  player4Attack = document.querySelector('.player4Attack')
// console.log(player3Attack)



// Declaring variables for different pictures depending on dark mode or light mode

const darkMode = document.querySelector('.buttonNight')

// Different pictures of users and emote changing depending on the dark or light mode

const picUser = document.querySelector('.user')
const picBot1 = document.querySelector('.bot1')
const picBot2 = document.querySelector('.bot2')
const picBot3 = document.querySelector('.bot3')
const containerUser = document.querySelector('.containerUser')
const chem1 = './images/icons/'
const dark = 'Dark'
const chem2 = '.svg'
const iconBook = chem1 + 'iconBook'
const iconCard = chem1 + 'iconCard'
const iconMute = chem1 + 'iconMute'
const iconVolume = chem1 + 'iconVolume'
const iconMoon = chem1 + 'iconMoon'
const iconSun = chem1 + 'iconSun'
const iconBot1 = chem1 + 'iconBot1'
const iconBot2 = chem1 + 'iconBot2'
const iconBot3 = chem1 + 'iconBot3'
const iconUser = chem1 + 'iconUser'

// Counter to see if dark mode or light mode
let count = 0

darkMode.addEventListener('click', () =>
{
  count++
  // If count%2 != 0 activate dark mode
  if(count%2 != 0)
  {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.iconBook').src = iconBook + dark + chem2
    document.querySelector('.iconCard').src = iconCard + dark + chem2
    document.querySelector('.iconMute').src = iconMute + dark + chem2
    document.querySelector('.iconSun').src = iconSun + dark + chem2
    document.querySelector('.bot1').src = iconBot1 + dark + chem2
    document.querySelector('.bot2').src = iconBot2 + dark + chem2
    document.querySelector('.bot3').src = iconBot3 + dark + chem2
    document.querySelector('.user').src = iconUser + dark + chem2
  }

  // If count%2 == 0 activate light mode

  else
  {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.iconBook').src = iconBook + chem2
    document.querySelector('.iconCard').src = iconCard + chem2
    document.querySelector('.iconMute').src = iconMute + chem2
    document.querySelector('.iconMoon').src = iconMoon + chem2
    document.querySelector('.bot1').src = iconBot1 + chem2
    document.querySelector('.bot2').src = iconBot2 + chem2
    document.querySelector('.bot3').src = iconBot3 + chem2
    document.querySelector('.user').src = iconUser + chem2
  }
})

// Taking the audio from the HTML
const audio = document.querySelector('.audioGame')
// Taking the emote of play audio
const playAudio = document.querySelector('.buttonMute')

// Counter to see if audio is played or not
let audioCount = 0

playAudio.addEventListener('click', () =>
{  
  audioCount++
  // If audioCount%2 != 0 play audio
  if(audioCount%2 != 0)
  {
    audio.play()
  }
  // If audioCount%2 == 0 pause audio
  else
  {
    audio.pause()
  }
})

// Event to see if the audio and played and dark mode to change the emote to a Volume played Emote
playAudio.addEventListener('click', () =>
{
  // Different conditions to put the image in the right place depending of the dark mode and if audio is played or not.
  if (audioCount%2 != 0 && count%2!=0)
  {
    document.querySelector('.iconMute').src = iconVolume + dark + chem2
  }
  else if(audioCount%2 !=0 && count%2==0)
  {
    document.querySelector('.iconMute').src = iconVolume + chem2
  }
  else if(audioCount%2 ==0 && count%2!=0)
  {
    document.querySelector('.iconMute').src = iconMute + dark + chem2
  }
  else if(audioCount%2 ==0 && count%2==0)
  {
    document.querySelector('.iconMute').src = iconMute + chem2
  }
})

// Event to see if the audio and played and dark mode to change the emote to a Volume played Emote
darkMode.addEventListener('click', () =>
{
  // Different conditions to put the image in the right place depending of the dark mode and if audio is played or not.
  if (audioCount%2 != 0 && count%2!=0)
  {
    document.querySelector('.iconMute').src = iconVolume + dark + chem2
  }
  else if(audioCount%2 !=0 && count%2==0)
  {
    document.querySelector('.iconMute').src = iconVolume + chem2
  }
  else if(audioCount%2 ==0 && count%2!=0)
  {
    document.querySelector('.iconMute').src = iconMute + dark + chem2
  }
  else if(audioCount%2 ==0 && count%2==0)
  {
    document.querySelector('.iconMute').src = iconMute + chem2
  }
})

// Overlay Rules

const rulesDisplay = document.querySelector('.overlayRules')

// Taking the button rules to make appear the rules
const buttonRules = document.querySelector('.buttonRules')
buttonRules.addEventListener('click', () => 
{
  rulesDisplay.style.display = 'block'
})
// Taking the quit button to make the rules disapear
const quitButton = document.querySelector('.quitButton')
console.log(quitButton)
quitButton.addEventListener('click', () => 
{
  console.log(quitButton)
  rulesDisplay.style.display = 'none'
})

// OVERLAY CARDS

const buttonCards = document.querySelector('.buttonCards')
console.log(buttonCards);

buttonCards.addEventListener('click', () => 
{
  const overlayCards = document.querySelector('.overlayCards')
  overlayCards.style.display = "block"

  const boutonAsset = document.querySelector('.quitButtonCards')
  boutonAsset.addEventListener('click', () => 
{
  overlayCards.style.display = "none"
})
})