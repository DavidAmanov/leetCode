const countNumber = (n, x) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let cur = x / i;
    if (cur <= n && cur % 1 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countNumber(5, 5));
