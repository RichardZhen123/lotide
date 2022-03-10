const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Pased: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let individLetters = sentence.split(" ").join("");
  const result = {};
  let total = 0;
  firstLetter = "";

  for (let i = 0; i < individLetters.length; i++) {
    if (firstLetter !== individLetters[i]) {
      firstLetter = individLetters[i];
      result[firstLetter] = total;
    }
    if (firstLetter === individLetters[i]) {
      result[individLetters[i]]++
    }
  }
  return result;
}

console.log(countLetters('aaabbbccc 123'));