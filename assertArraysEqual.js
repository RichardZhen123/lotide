const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return console.log(`❌❌❌ Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return console.log(`❌❌❌ Assertion Failed: ${arrOne} !== ${arrTwo}`);
    }
  }

  return console.log(`✅✅✅ Assertion Pased: ${arrOne} === ${arrTwo}`);
};

module.exports = assertArraysEqual;