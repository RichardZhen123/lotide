const assertArraysEqual = require('./assertArraysEqual');

const middle = function(listArr) {
  let result = [];
  let mid = (listArr.length - 1) / 2;

  if (mid >= 1 && mid % 1 !== 0) {
    let lowerLimit = Math.floor(mid);
    let upperLimit = Math.ceil(mid);
    result.push(listArr[lowerLimit], listArr[upperLimit]);
    return result;
  } else if (mid < 1) {
    return result;
  } else {
    result.push(listArr[mid]);
    return result;
  }
};

module.exports = assertArraysEqual;