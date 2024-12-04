// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Input: nums = [2,7,11,15], target = 9
let nums = [3, 2, 4];
let target = 6;
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}

console.log(twoSum(nums, target));
