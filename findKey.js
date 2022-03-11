const findKey = function(object, callback) {
  let keys = Object.keys(object);

  for(let key of keys) {
    if (callback(object[key].stars)) {
      return key
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, star => star === 2)) //"noma"