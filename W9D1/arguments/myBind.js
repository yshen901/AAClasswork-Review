// Function.prototype.myBind = function (context, ...bindArgs) {
//   return (...callArgs) => {
//     this.apply(context, bindArgs.concat(callArgs))
//   };
// }

Function.prototype.myBind = function (context) {
  let allArgs = [];
  for (let i = 1; i < arguments.length; i++)
    allArgs.push(arguments[i]);

  let callingCtx = this;
  return function () {
    for (let i = 0; i < arguments.length; i++) 
      allArgs.push(arguments[i]);
    callingCtx.apply(context, allArgs)
  };
}


// TESTING CODE
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true