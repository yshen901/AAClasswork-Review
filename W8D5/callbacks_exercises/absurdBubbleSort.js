const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoops(madeSwaps) {
    if (madeSwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoops);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoops(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, input => {
    if (input == "yes") 
      callback(true);
    else
      callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoops) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoops);
    });
  }
  else {
    outerBubbleSortLoops(madeAnySwaps);
  }
}
absurdBubbleSort([4,3,2,1], (arr) => {
  console.log(`Loop Done: ${arr}`);
});