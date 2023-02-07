/**
 * This function find the max value in an array of numbers
 * @param {array} numbers - an array of numbers
 * @returns {number}  the max value of the given array
 */
function max(numbers) {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (maxValue < numbers[i]) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}
// the following code using standard built-in objects can do the same:
// function max(numbers) {
//     return Math.max(...numbers);
// }

/**
 * This function will find the first position of the target number inside an array of numbers.
 * The position counted starting from 0, if can't find the target, will return -1
 * @param {array} numbers - an array of numbers
 * @param {number} target - a number to search in the array given
 * @returns {number} the position of given target number in the array.
 */
function findPosition(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (target === numbers[i]) {
      return i;
    }
  }
  return -1;
}
// the following code using standard built-in objects can do the same:
// function findPosition(numbers, target) {
//     return numbers.indexOf(target);
// }

//following is for testing
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2(the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
