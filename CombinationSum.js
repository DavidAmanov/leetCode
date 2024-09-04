// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// let candidates = [2, 3, 5],
//   target = 8;
var combinationSum = function (candidates, target) {
  let result = [];
  function check(remain, temp, start) {
    if (remain === 0) {
      result.push([...temp]);
      return;
    }
    if (remain < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]);
      check(remain - candidates[i], temp, i);
      temp.pop();
    }
  }
  check(target, [], 0);
  return result;
};

// console.log(combinationSum(candidates, target));

let nums = [5, 2, 11, 7, 15];
let target = 9;

function findSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(findSum(nums, target));
