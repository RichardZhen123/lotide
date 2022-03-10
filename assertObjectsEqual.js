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

const eqObjects = (object1, object2) => {
  let arr1Keys = Object.keys(object1);
  let arr2Keys = Object.keys(object2);
  
  if (arr1Keys.length !== arr2Keys.length) {
    return false;
  }
  
  for(const element of arr1Keys) {
    if (Array.isArray(object1[element])) {
      let arrayMatch = eqArrays(object1[element], object2[element]);
      
      if (!arrayMatch) {
        return false
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if(eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Pased: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba));
assertObjectsEqual(ab,ba)

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false