//Global variables
const board = document.querySelector('#board');
let color = 'black';


//Creates div elements and has hover feature
function createDivs(row,col) {
  for(let i = 0; i < (row * col); i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', colorSquare);
    board.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    board.appendChild(div).classList.add('box');
  }
}
createDivs(30,30)

//changes the color of each cell
function colorSquare() {
  this.style.backgroundColor = color;
}
