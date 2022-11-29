//Global variables
const board = document.querySelector('#board');
let color = 'black';
let click = true;

//Creates div elements and has hover feature
function createDivs(size) {
  let board = document.querySelector('#board')
  let squares = board.querySelectorAll('div')
  squares.forEach((div) => div.remove()); 

  let amount = size * size
  for(let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.appendChild(div).classList.add('box');
  }
}

//changes the color of each cell
function colorDiv() {
  if(click) {
    if(color === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
//changes the color
function colorChoice(choice) {
  color = choice;
}

function clearBoard() {
  let board = document.querySelector('#board')
  let squares = board.querySelectorAll('div')
  squares.forEach((div) => div.style.backgroundColor = 'white'); 
}

function changeSize(input) {
  createDivs(input);
}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
});
