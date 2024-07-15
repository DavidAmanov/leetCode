// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list. max length of array = 50 

Input: list1 = [1,2,4], list2 = [5,3,4]
Output: [1,1,2,3,4,4]

let list3 = [...list1, ...list2]
let arr = [1,2,4,5,3,4]
function bubbleSort(list3){
    let len = list3.length
    let swapped = true
    while(swapped){
        swapped=false
        for(let i = 0; i < len-1; i++){
            if(list3[i]>list3[i+1]){
                let temp = list3[i]
                list3[i]= list3[i+1]
                list3[i+1] = temp
                swapped =true
            } 
        }
    }
    return list3
}

console.log(bubbleSort(list3))

//okay this code doest work with linked list ^_^ 

