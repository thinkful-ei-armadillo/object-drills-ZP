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

let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

console.log(hobbit.meals[3]);

let persons = [
  {
    name: 'john',
    jobTitle: 'Teacher',
  },
  {
    name: 'james',
    jobTitle: 'engineer',
  },
  {
    name: 'kay',
    jobTitle: 'builder',
  }
];

persons.forEach(person => console.log(`Job title: ${person.jobTitle}, Name: ${person.name}`));