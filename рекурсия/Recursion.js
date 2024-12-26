// 1. create a little progrram that sum from 1 to n number

function sum(y) {
  if (y === 0) return y;
  return y + sum(y - 1);
}

// console.log(sum(5));

// 2. create function that realise factorial functionality

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

// console.log(factorial(5));

// 3. create numbers of fibonauchi function

function fibonauchi(start, goal) {
  if (goal === 1) return start[start.length - 2];
  console.log(start);
  return fibonauchi(
    [
      start[start.length - 1],
      start[start.length - 2] + start[start.length - 1],
    ],
    goal - 1
  );
}

// console.log(fibonauchi([1, 1], 3));

// 4. reverse string

function reverseString(string) {
  if (!string) return "";
  return (
    string[string.length - 1] +
    reverseString(string.slice(0, string.length - 1))
  );
}

// console.log(reverseString("David"));

//5. find the ellement in the array

function searchElement(array, target) {
  if (!array) return -1;
  if (array.pop() === target) {
    return true;
  } else {
    return searchElement(array, target);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7],
  target = 4;
// console.log(searchElement(array, target));

// 6.hanoi tower
// есть только три штыря и 8 дисков лежаших на первом, можно класть только меньший диск на больший, нужно перенести все диски на 3 штырь

let from = [4, 3, 2, 1];
let buffer = [];
let to = [];

function hanoiTower(n, start, goal, add) {
  if (n > 0) {
    hanoiTower(n - 1, start, add, goal);
    console.log(`Disk, ${n} move from ${start} to ${goal}`);
    hanoiTower(n - 1, add, goal, start);
  }
}

console.log(hanoiTower(4, "A", "C", "B"));
