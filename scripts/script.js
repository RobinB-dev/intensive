// Creating variables from the overlay

const pseudoInput = document.querySelector('.pseudoInput')
const confirmButton = document.querySelector('.confirmButton')
const playerName = document.querySelector('.name_player')
const overlay = document.querySelector('.overlayName')

// Put the player name in the right place and remove the overlay when click on confirm

confirmButton.addEventListener('click', () =>
{
  playerName.textContent = `${pseudoInput.value} (you)`

   // The player can't confirm if he doesn't enter a value

  if(pseudoInput.value != 0)
  {
    overlay.style.display = 'none'
  }
})

// Table with 106 cards, attribut : nick, id, type

// the function allows you to shuffle the cards
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

// the function listen the click on the deck
const clickDeck = document.querySelector('.pickCard')
clickDeck.addEventListener('click',(event) => 
{
  takeCard()
})

//card slot (positions)
let card1 = 0
let card2 = 0
let card3 = 0
let card4 = 0
let card5 = 0
let card6 = 0

// this function insert cards in the hand from the deck
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
    hand.splice(0, 1, card);
    document.querySelector('.card1').src = image
    card1 = 1
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
let placeType = ''

// listen click on a card in your hand
const moveCard = document.querySelectorAll('.myCards')
for (card of moveCard)
{
  card.addEventListener('click', moveCardFunc)
}

let distanceCard = 0
let memDistance = 0
let memWin =0

function moveCardFunc()
{
  let getIndex = this.classList[1].substr(4)
  const nick = hand.map(hand => `${hand.nick}`)
  const type = hand.map(hand => `${hand.type}`)
  const distance = hand.map(hand => `${hand.distance}`)
  const moveSRC = [`./images/cards/${nick[parseInt(getIndex-1)]}.svg`]

  // get the class name of the element in the window that you click on
  window.onclick = function(e)
  {
    const newPlace = e.srcElement.className;
    // get the class name of the element on the slot that you click on
    const lastFour = '.' + newPlace.substr(newPlace.length - 4);
    // get the class name of the card that that we select 
    const lastFive = '.' + newPlace.substr(newPlace.length - 5);
    // fisrtFour check if newPlace starts with card
    const firstFour = newPlace.substring(0, 4);
    // get the type of the card that that we select 
    const typeCard = type[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    
    // insert the distance sum of your cards speed in HTML
    if (distanceCard != 0 && firstFour == 'card')
    {
      memDistance = memDistance + parseInt(distanceCard)
      const win = document.querySelector('.myDistanceY')
      win.textContent = memDistance
      if (memDistance >= 100 && memWin == 0)
      {
        overlayWin.style.display = 'block'
        memWin = 1
      }
    }
    distanceCard = distance[parseInt(newPlace.substr(newPlace.length - 1)) - 1];
    
    // frees the space of the card that has been selected by assigning it the value 0
    if (lastFive == '.card1')
    {
      card1 = 0
      clean = '.card1'
    }
    else if (lastFive == '.card2')
    {
      card2 = 0
      clean = '.card2'
    }
    else if (lastFive == '.card3')
    {
      card3 = 0
      clean = '.card3'
    }
    else if (lastFive == '.card4')
    {
      card4 = 0
      clean = '.card4'
    }
    else if (lastFive == '.card5')
    {
      card5 = 0
      clean = '.card5'
    }
    else if (lastFive == '.card6')
    {
      card6 = 0
      clean = '.card6'
    }

    // that highlight the areas where you can place the map according to its type
    if (typeCard == 'attack' || typeCard == 'defense')
    {
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor = '#79b8ff18'});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor = ''});
    }
    else if (typeCard == 'speed')
    {
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor = '#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor = ''});
    }
    else if (typeCard == 'asset')
    {
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor = '#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor = ''});
    }
    else if (typeCard == 'limite' || typeCard == 'limite_def')
    {
      document.querySelectorAll('.limite').forEach(function(e) {e.style.backgroundColor = '#79b8ff18'});
      document.querySelectorAll('.attack').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.speed').forEach(function(e) {e.style.backgroundColor = ''});
      document.querySelectorAll('.asset').forEach(function(e) {e.style.backgroundColor = ''});
    }

    // injects the src of the selected card into the chosen location and delete the src of the card in your hand
    if (firstFour == 'card')
    {
      document.querySelector(lastFour).src = moveSRC
      document.querySelector(clean).src = ''
    }
    // if we click on the bin 
    else if (firstFour == 'trsh')
    {
      document.querySelector(clean).src = ''
    }
  }
}






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
  if (audioCount%2 != 0 && count%2!= 0)
  {
    document.querySelector('.iconMute').src = iconVolume + dark + chem2
  }
  else if(audioCount%2 != 0 && count%2 == 0)
  {
    document.querySelector('.iconMute').src = iconVolume + chem2
  }
  else if(audioCount%2 == 0 && count%2!= 0)
  {
    document.querySelector('.iconMute').src = iconMute + dark + chem2
  }
  else if(audioCount%2 == 0 && count%2 == 0)
  {
    document.querySelector('.iconMute').src = iconMute + chem2
  }
})

// Event to see if the audio and played and dark mode to change the emote to a Volume played Emote
darkMode.addEventListener('click', () =>
{
  // Different conditions to put the image in the right place depending of the dark mode and if audio is played or not.
  if (audioCount%2 != 0 && count%2!= 0)
  {
    document.querySelector('.iconMute').src = iconVolume + dark + chem2
  }
  else if(audioCount%2 != 0 && count%2== 0)
  {
    document.querySelector('.iconMute').src = iconVolume + chem2
  }
  else if(audioCount%2 == 0 && count%2!== 0)
  {
    document.querySelector('.iconMute').src = iconMute + dark + chem2
  }
  else if(audioCount%2 == 0 && count%2== 0)
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
  overlayCards.style.display = 'none'
})
// Taking the quit button to make the rules disapear
const quitButton = document.querySelector('.quitButton')
quitButton.addEventListener('click', () => 
{
  rulesDisplay.style.display = 'none'
})

// OVERLAY CARDS

const buttonCards = document.querySelector('.buttonCards')
const overlayCards = document.querySelector('.overlayCards')

buttonCards.addEventListener('click', () => 
{
  overlayCards.style.display = 'block'
  rulesDisplay.style.display = 'none'
})

const boutonAsset = document.querySelector('.quitButtonCards')
boutonAsset.addEventListener('click', () => 
{
  overlayCards.style.display = 'none'
})


// OVERLAY WIN


const overlayWin = document.querySelector('.overlayWin')
const boutonWin = document.querySelector('.continueButton')
boutonWin.addEventListener('click', () => 
{
  overlayWin.style.display = 'none'
})