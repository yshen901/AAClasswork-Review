Array.prototype.uniq = function() {
  let uniq = [];
  for (let i = 0; i < this.length; i++) {
    if (uniq.includes(this[i]))
      continue;
    uniq.push(this[i]);
  }
  return uniq;
};

Array.prototype.twoSum = function() {
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] == 0)
        return [i, j];
    }
  }
  return null;
};

Array.prototype.transpose = function() {
  if (this.length == 0 || this[0].length == 0)
    return this

  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
    let row = [];
    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transposed.push(row);
  }

  return transposed;
};