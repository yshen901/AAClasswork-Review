// PHASE 1
function titleize(arr, printCallBack) {
  titleizedArr = arr.map(x => x.toUpperCase());
  printCallBack(titleizedArr);
}

function printCB(arr) {
  console.log(JSON.stringify(arr));
}


// PHASE 2
class Elephant {
  constructor(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
  }

  trumpet() {
    console.log(`${this.name} goes 'phrRRRRRRRRR!!!!!'`);
  }

  grow() {
    this.height += 12;
  }

  addTrick(trick) {
    this.tricks.push(trick);
  }

  play() {
    console.log(`${this.name} is ${this.tricks[Math.random() * this.tricks.length]}`);
  }
}


// PHASE 3
Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} if trotting by!`)
};


// PHASE 4
function dinerBreakfast() {
  foods = "cheesy scrambled eggs";
  console.log(`I'd like ${foods} please.`)

  return (newFood) => {
    foods = foods.concat(` and ${newFood}`);
    return `I'd like ${foods} please.`
  }
}