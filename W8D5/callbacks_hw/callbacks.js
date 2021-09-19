// Timeout
// window.setTimeout(function() {
//   alert('HAMMERTIME');
// }, 5000)

// // Timeout plus closure
// hammerTime = function (time) {
//   window.setTimeout(() => {
//     alert(`${time} is hammertime!`);
//   }, 5000);
// };

// Readline
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function teaAndBiscuits() {
  let first, second;

  reader.question("Would you like some tea?", function (res) {
    first = res;
    console.log(`You replied ${res}.`);
    reader.question("Would you like some biscuits?", function (res) {
      second = res;
      console.log(`You replied ${res}.`);

      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });
}