// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isValid(string) {
  if (string.length % 2 !== 0) return false;
  let stack = [];
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" || string[i] === "}" || string[i] === "]") {
      let top = stack.pop();
      console.log(pairs[top]);
      if (pairs[top] !== string[i]) {
        return false;
      }
    } else if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);
    }
    console.log(stack);
  }
  if (stack.length !== 0) {
    return false;
  } else return true;
}

// задача на стек очевидно!!

let arr = "(("; //"([])"

console.log(isValid(arr));
