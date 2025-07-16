import { GameBoard } from './GameBoard.js';
import { Goblin } from './Goblin.js';

document.addEventListener('DOMContentLoaded', () => {
  const board = new GameBoard(4, 4);
  const goblin = new Goblin(board.getCells());
});