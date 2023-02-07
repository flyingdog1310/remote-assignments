function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    //don't search second num if target<nums[i]
    if (goal > 0) {
      //start search from nums[i]
      for (let j = i; j < nums.length; j++) {
        if (nums[j] === goal) {
          return [i, j];
        }
      }
    }
  }
}

//following is for testing
console.log(twoSum([2, 7, 11, 15], 9));
/*
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
