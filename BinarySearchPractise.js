

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function binarySearch (nums, target){
    let left = 0
    let rigth = nums.length-1
    while(left<=rigth){
        let mid = Math.floor((left+rigth)/2)
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] < target){
            left = mid +1
        } else {
            rigth = mid - 1
        }
    }
    return -1
}


console.log(binarySearch(nums, 11))

