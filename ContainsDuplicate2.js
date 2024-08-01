// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1], k = 2
// Output: false

let nums = [1, 0, 1, 1],
  k = 1;
// var containsNearbyDuplicate = function (nums, k) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], [...map.get(nums[i]), i]); // проверку можно сделать тут
//     } else {
//       map.set(nums[i], [i]);
//     }
//   }
//   console.log(map);
//   for (let j = 0; j < nums.length; j++) {
//     for (let g = 0; g < map.get(nums[j]).length; g++) {
//       let cur = Math.abs(map.get(nums[j])[g] - map.get(nums[j])[g + 1]);
//       console.log(cur);
//       if (cur <= k) {
//         console.log(cur);
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(containsNearbyDuplicate(nums, k));
//решение не оптимальное, я выполняю как оказалось лишнее действие

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      //абсолютно гениальный мув
      if (Math.abs(i - map.get(nums[i])) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate(nums, k));
