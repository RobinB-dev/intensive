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
let deck = [
  {
      nick: 'card_coffee',
      id: '1',
      type: 'defense'
  },
  {
    nick: 'card_coffee',
    id: '2',
    type: 'defense'
},
{
  nick: 'card_coffee',
  id: '3',
  type: 'defense'
},
{
  nick: 'card_coffee',
  id: '4',
  type: 'defense'
},
{
  nick: 'card_coffee',
  id: '5',
  type: 'defense'
},
{
  nick: 'card_coffee',
  id: '6',
  type: 'defense'
},
{
  nick: 'card_meeting',
  id: '7',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '8',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '9',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '10',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '11',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '12',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '13',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '14',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '15',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '16',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '17',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '18',
  type: 'defense'
},  {
  nick: 'card_meeting',
  id: '19',
  type: 'defense'
},
{
  nick: 'card_meeting',
  id: '20',
  type: 'defense'
},
{
    nick: 'card_pinterest',
    id: '21',
    type: 'defense'
}, {
  nick: 'card_pinterest',
  id: '22',
  type: 'defense'
}, {
  nick: 'card_pinterest',
  id: '23',
  type: 'defense'
}, {
  nick: 'card_pinterest',
  id: '24',
  type: 'defense'
}, {
  nick: 'card_pinterest',
  id: '25',
  type: 'defense'
},
  {
    nick: 'card_pinterest',
    id: '26',
    type: 'defense'
}, {
  nick: 'card_restart',
  id: '27',
  type: 'defense'
},
{
  nick: 'card_restart',
  id: '28',
  type: 'defense'
},{
  nick: 'card_restart',
  id: '29',
  type: 'defense'
},{
  nick: 'card_restart',
  id: '30',
  type: 'defense'
},{
  nick: 'card_restart',
  id: '31',
  type: 'defense'
},{
  nick: 'card_restart',
  id: '32',
  type: 'defense'
},
 {
  nick: 'card_healing',
  id: '33',
  type: 'defense'
},{
  nick: 'card_healing',
  id: '34',
  type: 'defense'
},{
  nick: 'card_healing',
  id: '35',
  type: 'defense'
},{
  nick: 'card_healing',
  id: '36',
  type: 'defense'
},{
  nick: 'card_healing',
  id: '37',
  type: 'defense'
},{
  nick: 'card_healing',
  id: '38',
  type: 'defense'
},
 {
  nick: 'card_photoshop',
  id: '39',
  type: 'attack'
},{
  nick: 'card_photoshop',
  id: '40',
  type: 'attack'
},{
  nick: 'card_photoshop',
  id: '41',
  type: 'attack'
}, {
  nick: 'card_client',
  id: '42',
  type: 'attack'
}, {
  nick: 'card_client',
  id: '43',
  type: 'attack'
}, {
  nick: 'card_client',
  id: '44',
  type: 'attack'
}, {
  nick: 'card_client',
  id: '45',
  type: 'attack'
}, {
  nick: 'card_client',
  id: '46',
  type: 'attack'
}, {
  nick: 'card_insominia',
  id: '47',
  type: 'attack'
}, {
  nick: 'card_insominia',
  id: '48',
  type: 'attack'
}, {
  nick: 'card_insominia',
  id: '49',
  type: 'attack'
}, {
  nick: 'card_medical_leave',
  id: '50',
  type: 'attack'
}, {
  nick: 'card_medical_leave',
  id: '51',
  type: 'attack'
}, {
  nick: 'card_medical_leave',
  id: '52',
  type: 'attack'
},{
  nick: 'card_clueless',
  id: '53',
  type: 'attack'
},{
  nick: 'card_clueless',
  id: '54',
  type: 'attack'
},{
  nick: 'card_clueless',
  id: '55',
  type: 'attack'
},{
  nick: 'card_clueless',
  id: '56',
  type: 'attack'
},{
  nick: 'card_speed_25',
  id: '57',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '58',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '59',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '60',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '61',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '62',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '63',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '64',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '65',
  type: 'speed'
},{
  nick: 'card_speed_25',
  id: '66',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '67',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '68',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '69',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '70',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '71',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '72',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '73',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '74',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '75',
  type: 'speed'
},{
  nick: 'card_speed_50',
  id: '76',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '77',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '78',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '79',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '80',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '81',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '82',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '83',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '84',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '85',
  type: 'speed'
},{
  nick: 'card_speed_75',
  id: '86',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '87',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '88',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '89',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '90',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '91',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '92',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '93',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '94',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '95',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '96',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '97',
  type: 'speed'
},{
  nick: 'card_speed_100',
  id: '98',
  type: 'speed'
},
{
 nick: 'card_iron_constitution',
  id: '99',
  type: 'asset'
  },
  {
  nick: 'card_computer_science',
  id: '100',
  type: 'asset'
  },
  {
    nick: 'card_speed_200',
    id: '101',
    type: 'speed',
   },{
    nick: 'card_speed_200',
    id: '102',
    type: 'speed',
   },{
    nick: 'card_speed_200',
    id: '103',
    type: 'speed',
   },{
    nick: 'card_speed_200',
    id: '104',
    type: 'speed',
   },
   {
    nick: 'card_sleeping_pill',
    id: '105',
    type: 'asset'
    },
    {
      nick: 'card_colaborator',
      id: '106',
      type: 'asset'
      }
]

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

let o = 0
function takeCard() {
  const card = deck.pop()
  hand.push(card)
  // to pick up a random card from the deck and put it in the hand
  // hand.splice(0,0,deck [Math.floor(Math.random()*deck.length)])
  // o++
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

// const id = hand.map(hand => `${hand.id}`)
// const placeId = id[1]
// // j = 0
// // j++
// deck.splice(placeId-j,1)
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
