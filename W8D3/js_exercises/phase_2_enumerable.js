Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++)
    callback(this[i]);
  return null
};

Array.prototype.myMap = function(callback) {
  let mapped = [];
  this.myEach( element => mapped.push(callback(element)) )
  return mapped;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  let startIdx = 0;

  if (initialValue == null) {
    acc = this[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < this.length; i++)
    acc = callback(acc, this[i]);
  return acc;
};

myReduceCB = function(acc, el) {
  return acc + el;
};

myMapCB = function(el) {
  return el*2;
};

myEachCB = function(el) {
  console.log(el*2);
};