const letterPositions = (sentence) => {
  const results = {};
  const formattedSentence = sentence.split(" ").join("");

  for (let i = 0; i < formattedSentence.length; i++) {
    results[formattedSentence[i]] = [];
  }

  for (let i = 0; i < formattedSentence.length; i++) {
    const letter = formattedSentence[i];
    results[letter].push(i);
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"));
// current out => 

// output here
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }