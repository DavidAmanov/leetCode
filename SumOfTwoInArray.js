// У вас есть переменные k, data которые содержат входные пользовательские данные.

// Напишите JavaScript код, который находит все возможные варианты из двух чисел в массиве data, которые при сложении были бы равны значению переменной k.

// Sample Input 1:

// 7 | [2, 3, 2, 4, 5]
// Sample Output 1:

// (2+5)(3+4)(2+5) 10 | [5, 5, 5] 7 | [2, 3, 2
let arr = [2,3,2,3,4,5,4],  num = 9
let result = []
function sumOfTwo (num, arr){
    let prev = new Set()
    for(let i = 0; i <= arr.length-1; i++){
        let str =''
        let temp = 0
        let diff = num-arr[i]
        if(arr.includes(diff)){
            temp = arr.findIndex(item=>item===diff)
            if(!prev.has([i, temp])){
                prev.add([i, temp])
                console.log(i, temp, "iter")
            }
        }
    }
    console.log(prev)
    for(let i = 0; i < prev.length; i+=2){
        result.push(`(${arr[prev[i]]}+${arr[prev[i+1]]})`)
    }
    if(result.length === 0){
        return '()'
    }
    else return result.join(' ')
}

console.log(sumOfTwo(num, arr))


