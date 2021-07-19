function range(start, end) {
  if (start > end)
    return []

  return [start].concat(range(start+1, end))
}

function sumRec(arr) {
  if (arr.length == 0)
    return 0;
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp == 0) {
    return 1;
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return 1/base * exponent(base, exp + 1);
  }
}

function fibonacci(n) {
  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 1];
  } else {
    remainder = fibonacci(n - 1);
    remainder.push(remainder[remainder.length - 1] + remainder[remainder.length - 2]);
    return remainder;
  }
}

function deepDup(arr) {
  if (!Array.isArray(arr))
    return [arr];
  
  let cloned = [];
  for (let i = 0; i < arr.length; i++) {
    cloned.concat(deepDup(arr[i]));
  }

  return cloned;
}
arr = [1,2,3, [4,5,6, [7,8,9]]];