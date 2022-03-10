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

const middle = function(listArr) {
  let result = [];
  let mid = (listArr.length - 1)/2

  if (mid >= 1 && mid % 1 !== 0) {
      lowerLimit = Math.floor(mid);
      upperLimit = Math.ceil(mid);
      result.push(listArr[lowerLimit], listArr[upperLimit]);
      return result;
  } else if (mid < 1) {
      return result;;
  } else {
    result.push(listArr[mid]);
    return result;
  }
}
// ---------------------------------
// For arrays with one or two elements, there is no middle. Return an empty array.

console.log(middle([1])) // => []
console.log(middle([1,2]))// // => []

// --------------------------------
// For arrays with odd number of elements, an array containing a single middle element should be returned.

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

// ---------------------------------
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// ---------------------------------
//test
assertArraysEqual(middle([1,2,3,4]), [2,3]);