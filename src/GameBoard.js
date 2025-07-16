export class GameBoard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cells = [];
    this.board = document.getElementById('game-board');
    this.init();
  }

  init() {
    for (let i = 0; i < this.rows * this.cols; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getCells() {
    return this.cells;
  }
}