/**
 * This function count how many ‘a’ and ‘b’ letters are in the given input and return the total number.
 * @param {object} input - an array of letters
 * @returns {number} the number of ‘a’ and ‘b’ letters in the given array
 */

function countAandB(input) {
  let targetCount = 0;
  const target = ["a", "b"];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < target.length; j++) {
      //for each loop ,check input elements to match the target(a,b) and count
      if (input[i] === target[j]) {
        targetCount++;
      }
    }
  }
  return targetCount;
}

/**
 * This function  convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on.
 * @param {object} input - an array of letters
 * @returns {object} a new array with ‘a’ to be 1, ‘b’ to be 2, and so on.
 */

function toNumber(input) {
  let number = [];
  for (let i = 0; i < input.length; i++) {
    number.push(input[i].charCodeAt(0) - 96); //a.charCodeAt == 97
  }
  return number;
}

//following is for testing

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
