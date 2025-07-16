export class Goblin {
  constructor(cells) {
    this.cells = cells;
    this.currentCellIndex = null;
    this.goblin = document.createElement('img');
    this.goblin.src = './assets/goblin.png';
    this.misses = 0;
    this.score = 0;
    this.init();
  }

  init() {
    this.moveGoblin();
    this.listenClicks();
  }

  moveGoblin() {
    let nextCellIndex;
    do {
      nextCellIndex = Math.floor(Math.random() * this.cells.length);
    } while (nextCellIndex === this.currentCellIndex);

    if (this.currentCellIndex !== null) {
      this.cells[this.currentCellIndex].removeChild(this.goblin);
    }

    this.cells[nextCellIndex].appendChild(this.goblin);
    this.currentCellIndex = nextCellIndex;

    setTimeout(() => {
      if (this.cells[this.currentCellIndex].contains(this.goblin)) {
        this.misses++;
        if (this.misses >= 5) {
          alert('Game Over!');
          window.location.reload();
        }
        this.moveGoblin();
      }
    }, 1000);
  }

  listenClicks() {
    this.cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (cell.contains(this.goblin)) {
          this.score++;
          document.getElementById('score').textContent = `Score: ${this.score}`;
          this.moveGoblin();
        }
      });
    });
  }
}