// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.innerText = 'one';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'two';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'three';
ul.appendChild(li3);

// div.insertAdjacentElement('beforebegin', ul);
div.appendChild(ul);

// create an image

const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';

// set the width to 250
img.width = '250';
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const divAboveUL = ul.previousElementSibling;
// console.log(divAboveUL);
divAboveUL.lastElementChild.classList.add('warning');
// remove the first paragraph
divAboveUL.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
  </div>
  `;
}

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
// append those cards to the div
const data = [
  { name: 'A', age: 20, height: 155 },
  { name: 'B', age: 21, height: 156 },
  { name: 'C', age: 22, height: 157 },
];

data.forEach(player => {
  const card = generatePlayerCard(player.name, player.age, player.height);
  const cardNode = document.createRange().createContextualFragment(card);
  newDiv.appendChild(cardNode);
});

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
function deleteFunction(e) {
  e.target.parentElement.remove();
}
const cards = document.querySelectorAll('.playerCard');
console.log(cards);
cards.forEach(card => {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.onclick = deleteFunction;
  card.appendChild(button);
});
