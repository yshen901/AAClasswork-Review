class Board {
  constructor() {
    this.grid = new Array(3).fill(null).map(() =>  new Array(3).fill(null) );
  }

  won() {
    return !!this.winner() && !this.tied();
  }

  getGrid() {
    return this.grid;
  }

  tied() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.empty([i, j]))
          return false;
      }
    }
    return true;
  }

  winner() {
    let val;
    for (let i = 0; i < 3; i++) {
      if (val = this.checkRow(i))
        return val;
      if (val = this.checkCol(i))
        return val;
    }

    return this.checkDiag();
  }

  checkRow(i) {
    let val = this.getMark([i, 0]);

    for (let j = 1; j < 3; j++) {
      if (val != this.getMark([i, j]))
        return null;
    }

    return val;
  }

  checkCol(i) {
    let val = this.getMark([0, i]);

    for (let j = 1; j < 3; j++) {
      if (val != this.getMark([j, i]))
        return null;
    }

    return val;
  }

  checkDiag() {
    let val1 = this.getMark([0, 0]);
    for (let i = 0; i < 3; i++) {
      if (this.getMark([i, i]) != val1)
        val1 = null;
    }

    let val2 = this.getMark([0, 2]);
    for (let i = 0; i < 3; i++) {
      if (this.getMark[i, 2-i] != val2)
        val2 = null;
    }

    return (val1 ? val1 : val2);
  }

  validPos(pos) {
    return pos[0] >= 0 && pos[0] < this.grid.length && pos[1] >= 0 && pos[1] < this.grid[0].length && this.empty(pos);
  }

  empty(pos) {
    return this.grid[pos[0]][pos[1]] == null;
  }

  placeMark(pos, mark) {
    this.grid[pos[0]][pos[1]] = mark;
    return null;
  }

  getMark(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  printMark(pos) {
    if (this.empty(pos))
      return "_";
    return this.grid[pos[0]][pos[1]];
  }

  print() {
    console.log();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++)
        process.stdout.write(this.printMark([i, j]) + ' ');
      process.stdout.write(this.printMark([i, 2]) + "\n")
    }
    console.log();
  }
}

module.exports = Board;