function flipNumber(n) {
  if (n === "") {
    return "";
  }
  let result = n[n.length - 1];
  let nextStep = "";
  for (let i = n.length - 2; i >= 0; i--) {
    nextStep += n[i];
  }
  console.log(nextStep);
  return result + flipNumber(nextStep);
}

console.log(flipNumber("012"));
