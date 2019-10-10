/*
Create a function that determines if there are duplicate values and returns a boolean.
*/
// Time: O(n) | Space: O(n);
const areThereDuplicates = (...args) => {
  let hashTable = {};
  let output = [];
  for (let val of args) {
    if (hashTable[val] === undefined) {
      hashTable[val] = 1;
    } else {
      hashTable[val] += 1;
    }
  }
  for (let val of args) {
    if (hashTable[val] > 1) {
      output.push(val);
    }
  }
  if (output.length) return output;
  else return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

