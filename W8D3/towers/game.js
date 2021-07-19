class Game {
  constructor() {
    this.towers = [
      [3, 2, 1],
      [],
      []
    ];
  }

  promptMove(reader, callback) {
    this.printStacks();
    reader.question("Starting tower: ", (startIdx) => {
      let startTowerIdx = parseInt(startIdx);
      reader.question("Ending tower: ", (endIdx) => {
        let endTowerIdx = parseInt(endIdx);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  printStacks() {
    let output = "";
    for (let i = 0; i < this.towers.length; i++) {
      output += "|";
      for (let j = 0; j < this.towers[i].length; j++) {
        output += ` ${this.towers[i][j]}`
      }
      output += "\n";
    }

    console.log(output);
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let endTower = this.towers[endTowerIdx];
    let startTower = this.towers[startTowerIdx];
    
    if (startTowerIdx < 0 || startTowerIdx > 2 || endTowerIdx < 0 || endTowerIdx > 2) { return false; }
    if (startTower.length == 0) { return false; }
    if (endTower.length == 0) { return true; }

    return startTower[startTower.length - 1] < endTower[endTower.length - 1];
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  }

  isWon() {
    this.towers[0].length == 0 && ( this.towers[1].length == 0 || this.towers[2].length == 0 )
  }

  run(reader, completionCallback) {
    // while (!this.isWon()) {
    //   this.promptMove(reader, (startIdx, endIdx) => {
    //     if (!this.move(startIdx, endIdx))
    //       console.log("Invalid Move!")
    //   });
    // }

    // console.log("Congratulations you won!")
    // completionCallback();

    this.promptMove(reader, (startIdx, endIdx) => {
      if (!this.move(startIdx, endIdx))
        console.log("Invalid Move!")

      if (this.isWon()) {
        this.printStacks();
        console.log("You win!");
        completitionCallback();
      } else {
        this.run(reader, completionCallback)
      }
    });
  }

  reset() {
    this.towers = [
      [3,2,1],
      [],
      []
    ]
  }
}

module.exports = Game;