// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
let haystack = "jadbutsad", needle = "sad"
var strStr = function(haystack, needle) {
    let step = needle.length
    for(let i = 0; i< haystack.length; i++){
        if((haystack.slice(i, i+step))===needle){
            return i
        } 
    }
    return -1
};
console.log(strStr(haystack, needle))