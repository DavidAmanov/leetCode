// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

let  s = "a"
var lengthOfLastWord = function(s) {
    let len = s.length
    let k = 0
    let l = 0
    for(let i = 1; i <= len; i++){
        if(s[len-i] !== ' '){
            k++
        } else if(s[len-i]===' '){
            l++
            if(k >= 1){
                return k
            }
        }
    }
    return k
};

console.log(lengthOfLastWord(s))