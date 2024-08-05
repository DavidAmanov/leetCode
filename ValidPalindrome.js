// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
let s = "A man, a plan, a canal: Pansama";
var isPalindrome = function (s) {
  let set = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase())) {
      str += s[i].toLowerCase();
    }
  }
  for (let j = 0, k = str.length - 1; j <= k; j++, k--) {
    if (str[j] !== str[k]) {
      console.log(str[j], str[k]);
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));
