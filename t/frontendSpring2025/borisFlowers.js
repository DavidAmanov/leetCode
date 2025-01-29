const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const get = (x, add) => {
  x -= add;
  let ans = 1;
  while (x > 1) {
    x = Math.floor(x / 2);
    ans *= 2;
  }
  return ans;
};

const solve = (x) => {
  if (x < 7) {
    return -1;
  }

  let ans1 = get(x, 3);
  let ans2 = get(x - ans1, 1);

  if (ans2 >= ans1) {
    ans2 = Math.floor(ans1 / 2);
  }

  let ans3 = get(x - ans1 - ans2, 0);

  if (ans3 >= ans2) {
    ans3 = Math.floor(ans2 / 2);
  }

  return ans1 + ans2 + ans3;
};

let daysCounter = 0;
let totalDays = 0;

rl.on("line", (line) => {
  if (daysCounter === 0) {
    totalDays = parseInt(line.trim());
    daysCounter++;
    return;
  }

  const ai = parseInt(line.trim());
  console.log(solve(ai));
  daysCounter++;

  if (daysCounter > totalDays) {
    rl.close();
  }
});
