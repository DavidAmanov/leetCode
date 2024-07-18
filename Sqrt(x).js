// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//you can resolve this by binary search 
//num - its just a array of numbers 
// function binarySearch(target) {
//     if(target*target===target){
//         return target
//     }
//     let result = 0
//     let left = 0
//     let right = target
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         let square = mid * mid
//         if(square===target){
//             return mid
//         } else if(square<target){
//             result = mid
//             left = mid+1 
//         } else {
//             right =mid-1
//         }

//     }
//     return result

// }
// console.log(binarySearch(6))

const nums = [-10, -3, 0, 1, 5, 9, 12];
const target = 5;

function binarySearch(nums, target){
    let left = 0
    let right = nums.length
    console.log(right)
    let result = 0
    while(left<=right){
        let mid = Math.floor((nums[left]+nums[right])/2)
        console.log(mid, 'mi')
        if(nums[mid]===target){
            result = mid
            return result
        } else if(nums[mid]>target){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
}

console.log(binarySearch(nums, target))