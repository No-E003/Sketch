const board = document.querySelector('#board');

//Creates div elements 
function createDivs(row,col) {
  for(let i = 0; i < (row * col); i++) {
    const div = document.createElement('div');
    board.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    board.appendChild(div).classList.add('box');
  }
}
createDivs(30,30)