// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// let a = "1010", b = "1011"
// var addBinary = function(a, b) {
//     let x = parseInt(a,2)
//     let y = parseInt(b,2)
//     let z = x + y
//     return z.toString(2)
// };

// console.log(addBinary(a, b))

//this solution doesnt work with very long binary numbers

// let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
let a = "10", b = "11000"

var addBinary = function(a, b) {
    let temp = 0;
    let result = [];
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || temp) {
        let sum = temp;

        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';

        console.log(sum, 'sum')
        result.push(sum % 2);
        console.log(result, "res")
        temp = Math.floor(sum / 2);
        console.log(temp, "temp")
    }

    return result.reverse().join('');
}

console.log(addBinary(a, b))