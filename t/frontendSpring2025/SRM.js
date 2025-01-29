const checkTheString = (s) => {
  let rPos = 0;
  let mPos = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rPos = i;
    } else if (s[i] === "M") {
      mPos = i;
    }
  }
  if (rPos < mPos) {
    return "Yes";
  } else {
    return "No";
  }
};

console.log(checkTheString("SRM"));
