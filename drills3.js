'use strict';
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

//drill 2

let obj = {
  foo: 60,
  bar: 'hi',
  fum: 'hello',
  quux: 200,
  spam: null
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

//drill 3
let hobbit = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

console.log(hobbit.meals[3]);

//drill 4
let persons = [
  {
    name: 'john',
    jobTitle: 'Teacher'
  },
  {
    name: 'james',
    jobTitle: 'engineer'
  },
  {
    name: 'kay',
    jobTitle: 'builder'
  }
];

persons.forEach(person =>
  console.log(`Job title: ${person.jobTitle}, Name: ${person.name}`)
);

//drill 5

persons = [
  {
    name: 'john',
    jobTitle: 'Founder'
  },
  {
    name: 'james',
    jobTitle: 'engineer',
    boss: 'Fred'
  },
  {
    name: 'kay',
    jobTitle: 'builder',
    boss: 'Fred'
  }
];

persons.forEach(person => {
  let report = `${person.jobTitle} ${person.name}`;
  'boss' in person
    ? (report = ` ${report} reports to ${person.boss}`)
    : (report = ` ${report} doesn't report to anybody.`);

  console.log(report);
});

// Drill 6
let CODE = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decodeWords(str) {
  return str
    .split(' ')
    .map(x => decode(x))
    .join('');
}

function decode(word) {
  if (word[0] in CODE) return word[CODE[word[0]]];
  else return ' ';
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

//drill 7
function createCharacter([name, nickname, race, origin, attack, defense]) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(character) {
      let dmgTo = calculateDamage(character.defense, this.attack);
      let dmgFrom = calculateDamage(this.defense, character.attack);
      return `"Your opponent takes ${dmgTo} damage and you receive ${dmgFrom} damage"`;
    }
  };
}

function calculateDamage(defense, attack) {
  return defense > attack ? 0 : attack - defense;
}

let arrayCharacters = [
  ['Gandalf the White', 'gandalf', 'Wizard', 'Middle-Earth', 10, 6],
  ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1],
  ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shrine', 3, 2],
  ['Aragon son of Arathon', 'aragon', 'Man', 'Dunnedain', 6, 8],
  ['Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5],
  ['Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9, 6]
];

const characters = [
  createCharacter(arrayCharacters[0]),
  createCharacter(arrayCharacters[1]),
  createCharacter(arrayCharacters[2]),
  createCharacter(arrayCharacters[3]),
  createCharacter(arrayCharacters[4]),
  createCharacter(arrayCharacters[5])
];

characters.find(element => element.nickname === 'aragon').describe();

let hobbitChars = characters.filter(element => element.race === 'Hobbit');

let highAttackChars = characters.filter(element => element.attack > 5);

console.log(characters[0].evaluateFight(characters[1]));

// Drill 8

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];



function findOne(arr, query){
  let toReturn = null;
  arr.forEach(hero => {
    let match = true;
    for (const key in query){
      if (hero.hasOwnProperty(key)){
        if (hero[key] !== query[key]){
          match = false;
        }
      } else {
        match = false;
      }
    }
    match === true? toReturn = hero: '';
  });
  return toReturn;
}

console.log(findOne(HEROES, {id: 1}));
console.log(findOne(HEROES, {id: 10}));
console.log(findOne(HEROES, {id: 5, squad: 'Justice League'}));
console.log(findOne(HEROES, {id: 2, name: 'Aquaman'}));
