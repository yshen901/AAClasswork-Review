Array.prototype.bubbleSort = function() {
  let sorted = false;
  let sortedArr = this.slice(0);
  
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i+1]) {
        sorted = false;
        [ sortedArr[i], sortedArr[i+1] ] = [ sortedArr[i+1], sortedArr[i] ];
      }
    }
  }

  return sortedArr;
};

String.prototype.substrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++)
      substrings.push(this.slice(i, j))
  }

  return substrings;
};