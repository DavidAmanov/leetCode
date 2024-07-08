// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === target){
            return i
        } else if(nums[i]>target){
            return i
        } else if(i === nums.length-1){
            return i+1
        }
    }
};

searchInsert()