let s = "MCMXCIV"; //1994

var romanToInt = function (s) {
  let pairs = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // I can be placed before V (5) and X (10) to make 4 and 9.
  // X can be placed before L (50) and C (100) to make 40 and 90.
  // C can be placed before D (500) and M (1000) to make 400 and 900.

  let result = 0;
  let next = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (pairs[s[i]] > pairs[s[i - 1]]) {
      result -= pairs[s[i - 1]];
      result += pairs[s[i]];
      i = i - 1;
    } else {
      result += pairs[s[i]];
    }
    console.log(result);
  }
  return result;
};

console.log(romanToInt(s));
