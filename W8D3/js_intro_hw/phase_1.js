/////////////
// PHASE 1 //
/////////////

// var can be redeclared and re-initialized, and is function scope
function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  var x = "in block"
  console.log(x);
}

// const scope is block not function
function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// Tried to edit a const that has already been delcared and initialized
function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// No errors, just shows that let is exclusive to the block its in.
// The two x's are different variables.
function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// Cannot redeclare a variable twice in the same block.
function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`
}

function isSubstring(str, subStr) {
  return str.indexOf(subStr) != -1
}


/////////////
// PHASE 2 //
/////////////

function fizzBuzz(arr) {
  fizzArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 15 == 0)
      continue;
    if (arr[i] % 3 == 0 || arr[i] % 5 == 0)
      fizzArr.push(arr[i]);
  }
  return fizzArr;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

function sumOfNPrimes(n) {
  let i = 0;
  let sum = 0;
  for (let num = 2; i < n; num++) {
    if (isPrime(num)) {
      i++;
      sum += num;
    }
  }
  return sum;
}