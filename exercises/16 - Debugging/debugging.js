const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.log(person.name);
// });

// Console Methods
console.log(1);
console.warn('Warning!');
console.error('This is error');
people.forEach((person) => {
  console.group(person.name);
  console.log(person.country);
  console.log(person.cool);
  console.groupEnd('Done');
});
console.table(people);
console.count(`Show Count`);

// Callstack
// To show whether the code is
function three() {
  console.log(1);
}

function two() {
  four();
  three();
}

function one() {
  two();
}

// Grabbing Elements

// Select the element in elements tab and access them at console by $0, i.e. last element you selected, and so on.

// $ is basically a dom selector in console.

// Breakpoints

people.forEach((person) => {
  console.group(person.name);
  console.log(person.country);
  debugger;
  console.log(person.cool);
  console.groupEnd('Done');
});

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  // doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
