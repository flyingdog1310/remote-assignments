/**
 * This function return an object which shows the count of each string appear in the input array.
 * @param {array} input - an array contains strings
 * @returns {object}  an object which shows {"string": times of the string appear in the input array}
 */
function count(input) {
  let totalNumber = {};

  for (i = 0; i < input.length; i++) {
    if (totalNumber[input[i]] === undefined) {
      totalNumber[input[i]] = 1;
    } else {
      totalNumber[input[i]]++;
    }
  }
  return totalNumber;
}

//following is for testing
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

/**
 * This function return an object which shows the summed-up value of each "value" key.
 * @param {array} input - an array contains objects with a "key" key value of"string" and a "value" key value of number
 * @returns {object}  an object which shows {"key" value in given objects : number of the "value" key with "key" combined}
 */
function groupByKey(input) {
  let totalNumber = {};
  for (i = 0; i < input.length; i++) {
    if (totalNumber[input[i].key] === undefined) {
      totalNumber[input[i].key] = input[i].value;
    } else {
      totalNumber[input[i].key] += input[i].value;
    }
  }
  return totalNumber;
}

//following is for testing
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
