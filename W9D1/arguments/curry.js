function curriedSum(numArgs) {
  let numbers = [];

  function curryFunc (num) {
    numbers.push(num);

    if (numbers.length == numArgs) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
      return sum;
    }
    return curryFunc;
  }

  return curryFunc;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
  let origFunc = this;
  args = [];
  for (let i = 1; i < arguments.length; i++) 
    args.push(arguments[i]);

  function curriedFunc() {
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
      if (args.length == numArgs) 
        return origFunc(args);
    }
    return curriedFunc;
  }

  return curriedFunc;
}

function sumFunc(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++)
    total += nums[i];
  return total;
}

const curriedSumFunc = sumFunc.curry(4);
console.log(curriedSumFunc(5)(30)(20)(1)); // => 56