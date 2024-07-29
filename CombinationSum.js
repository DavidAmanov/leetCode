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

let candidates = [2, 3, 6, 7],
  target = 7;
var combinationSum = function (candidates, target) {
  let result = [];
  let current = target;
  for (let i = 0; i < candidates.length; i++) {
    let temp = [];
    current = current - candidates[i];
    if (current > 0) {
      for (let j = 0; j < candidates.length; j++) {
        if (candidates[j] === current) {
          temp.push(candidates[i], candidates[j]);
        }
      }
    }
  }
};
