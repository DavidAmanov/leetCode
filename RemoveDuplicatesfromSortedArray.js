// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// let nums = [0,0,1,1,1,2,2,3,3,4]
// var removeDuplicates = function(nums) {
//     let result = Array.from(new Set(nums))
//     return result
// };
//такое решение не проходит придется делать в ручную
let nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            console.log("k-",k, "i-", i)
            nums[k] = nums[i]; // if values doesnt equal move i element to k position (often k<i), so in this step we sort the array
            k++;
        }
    }
    return nums.splice(0,k);
};

console.log(removeDuplicates(nums))