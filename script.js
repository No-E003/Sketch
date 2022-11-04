//Global variables
const board = document.querySelector('#board');
let color = 'black';


//Creates div elements and has hover feature
function createDivs(row,col) {
  for(let i = 0; i < (row * col); i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    board.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    board.appendChild(div).classList.add('box');
  }
}
createDivs(30,30)

//changes the color of each cell
function colorDiv() {
  this.style.backgroundColor = color;
}
//changes the color
function colorChoice(choice) {
  color = choice;
}

//    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%);`
