// Given an integer array nums, return true if any value appears at
// least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

let nums = [1, 2, 3, 4];
var containsDuplicate = function (nums) {
  let i = 0;
  let map = new Map();
  let result = 1;
  while (result < 2) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      result += 1;
      if (result > 1) {
        return true;
      }
    } else {
      map.set(nums[i], 1);
    }
    if (i >= nums.length) {
      return false;
    }
    console.log(i);
    i += 1;
  }
  return false;
};

console.log(containsDuplicate(nums));
//решение через set оптимальнее
