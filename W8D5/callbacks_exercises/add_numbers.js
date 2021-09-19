const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please input a number: ", (num) => {
      sum += parseInt(num);
      console.log(`The new sum is: ${sum}.`)
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } 
  else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));