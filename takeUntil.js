const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let result = [];
  
  for(let item of array) {
    if (callback(item)) {
      result.push(item)
    }
  }
  return result;
}


console.log(takeUntil(data1, greaterThan0 => greaterThan0 > 0))

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }

  return console.log(`✅✅✅ Assertion Pased: ${arr1} === ${arr2}`);
}

assertArraysEqual(takeUntil(data1, greaterThan0 => greaterThan0 > 0), [ 1, 2, 5, 7, 2, 2, 4, 5])