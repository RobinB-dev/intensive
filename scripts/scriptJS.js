// Creating variables to create the event

let playerName = document.querySelector('.player_4')
const inputName = document.querySelector('.inputName')
const confirmButton = document.querySelector('.confirmButton')
const playerPseudo = document.querySelector('.playerPseudo')






let deck = [
  {
      nick: 'cardCoffee',
      id: '1',
      type: 'defense'
  },
  {
    nick: 'cardCoffee',
    id: '2',
    type: 'defense'
},
{
  nick: 'cardCoffee',
  id: '3',
  type: 'defense'
},
{
  nick: 'cardCoffee',
  id: '4',
  type: 'defense'
},
{
  nick: 'cardCoffee',
  id: '5',
  type: 'defense'
},
{
  nick: 'cardCoffee',
  id: '6',
  type: 'defense'
},
{
  nick: 'cardMeeting',
  id: '7',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '8',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '9',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '10',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '11',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '12',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '13',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '14',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '15',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '16',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '17',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '18',
  type: 'defense'
},  {
  nick: 'cardMeeting',
  id: '19',
  type: 'defense'
},
  {
      nick: 'cardMeeting',
      id: '20',
      type: 'defense'
  },
  {
    nick: 'cardPinterest',
    id: '21',
    type: 'defense'
}, {
  nick: 'cardPinterest',
  id: '22',
  type: 'defense'
}, {
  nick: 'cardPinterest',
  id: '23',
  type: 'defense'
}, {
  nick: 'cardPinterest',
  id: '24',
  type: 'defense'
}, {
  nick: 'cardPinterest',
  id: '25',
  type: 'defense'
},
  {
    nick: 'cardPinterest',
    id: '26',
    type: 'defense'
}, {
  nick: 'cardRestart',
  id: '27',
  type: 'defense'
},
{
  nick: 'cardRestart',
  id: '28',
  type: 'defense'
},{
  nick: 'cardRestart',
  id: '29',
  type: 'defense'
},{
  nick: 'cardRestart',
  id: '30',
  type: 'defense'
},{
  nick: 'cardRestart',
  id: '31',
  type: 'defense'
},{
  nick: 'cardRestart',
  id: '32',
  type: 'defense'
},
 {
  nick: 'cardHealing',
  id: '33',
  type: 'defense'
},{
  nick: 'cardHealing',
  id: '34',
  type: 'defense'
},{
  nick: 'cardHealing',
  id: '35',
  type: 'defense'
},{
  nick: 'cardHealing',
  id: '36',
  type: 'defense'
},{
  nick: 'cardHealing',
  id: '37',
  type: 'defense'
},{
  nick: 'cardHealing',
  id: '38',
  type: 'defense'
},
 {
  nick: 'cardPhotoshop',
  id: '39',
  type: 'attack'
},{
  nick: 'cardPhotoshop',
  id: '40',
  type: 'attack'
},{
  nick: 'cardPhotoshop',
  id: '41',
  type: 'attack'
}, {
  nick: 'cardClient',
  id: '42',
  type: 'attack'
}, {
  nick: 'cardClient',
  id: '43',
  type: 'attack'
}, {
  nick: 'cardClient',
  id: '44',
  type: 'attack'
}, {
  nick: 'cardClient',
  id: '45',
  type: 'attack'
}, {
  nick: 'cardClient',
  id: '46',
  type: 'attack'
}, {
  nick: 'cardInsominia',
  id: '47',
  type: 'attack'
}, {
  nick: 'cardInsominia',
  id: '48',
  type: 'attack'
}, {
  nick: 'cardInsominia',
  id: '49',
  type: 'attack'
}, {
  nick: 'cardSickLeave',
  id: '50',
  type: 'attack'
}, {
  nick: 'cardSickLeave',
  id: '51',
  type: 'attack'
}, {
  nick: 'cardSickLeave',
  id: '52',
  type: 'attack'
},{
  nick: 'cardClueless',
  id: '53',
  type: 'attack'
},{
  nick: 'cardClueless',
  id: '54',
  type: 'attack'
},{
  nick: 'cardClueless',
  id: '55',
  type: 'attack'
},{
  nick: 'cardClueless',
  id: '56',
  type: 'attack'
},{
  nick: 'cardSpeed25',
  id: '57',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '58',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '59',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '60',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '61',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '62',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '63',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '64',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '65',
  type: 'speed'
},{
  nick: 'cardSpeed25',
  id: '66',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '67',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '68',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '69',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '70',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '71',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '72',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '73',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '74',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '75',
  type: 'speed'
},{
  nick: 'cardSpeed50',
  id: '76',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '77',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '78',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '79',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '80',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '81',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '82',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '83',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '84',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '85',
  type: 'speed'
},{
  nick: 'cardSpeed75',
  id: '86',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '87',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '88',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '89',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '90',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '91',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '92',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '93',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '94',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '95',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '96',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '97',
  type: 'speed'
},{
  nick: 'cardSpeed100',
  id: '98',
  type: 'speed'
},
{
 nick: 'ironConstitution',
  id: '99',
  type: 'asset'
  },
  {
  nick: 'computerScience',
  id: '100',
  type: 'asset'
  },
  {
    nick: 'cardSpeed200',
    id: '101',
    type: 'speed',
   },{
    nick: 'cardSpeed200',
    id: '102',
    type: 'speed',
   },{
    nick: 'cardSpeed200',
    id: '103',
    type: 'speed',
   },{
    nick: 'cardSpeed200',
    id: '104',
    type: 'speed',
   },
   {
    nick: 'sleepingPill',
    id: '105',
    type: 'asset'
    },
    {
      nick: 'collaborator',
      id: '106',
      type: 'asset'
      }
];

const chaine1 = ['./images/cards/']
const chaine3 = ['.svg']
console.log(deck)
const randomCard = Math.ceil(Math.random()*106)

let card = document.querySelector('.card')
let hand = []
takeCard()
function takeCard() {
  hand.splice(1,0,deck [Math.ceil(Math.random()*106)-1])
  
  hand.splice(2,1,deck [Math.ceil(Math.random()*106)-1])
  hand.splice(3,1,deck [Math.ceil(Math.random()*106)-1])
  hand.splice(4,1,deck [Math.ceil(Math.random()*106)-1])
  hand.splice(5,1,deck [Math.ceil(Math.random()*106)-1])
  hand.splice(6,1,deck [Math.ceil(Math.random()*106)-1])
  const nick = hand.map(hand => `${hand.nick}`)
  console.log(nick)
  const chaine2 = nick[1]
 
  const image = chaine1+chaine2+chaine3
  console.log(image)
  console.log (chaine2)
}

console.log (Array.map);
