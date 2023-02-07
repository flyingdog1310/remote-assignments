/**
 * This function return an number which shows the position of target number appear in the input array.
 * @param {array} numbers - an sorted array contains numbers
 * @param {number} target - a number to search in the given array
 * @returns {number}  an number which shows the position of target number in the given array start with 0
 */

function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "target number not found !";
}

//following is for testing
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
