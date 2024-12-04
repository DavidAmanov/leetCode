//example
//1. нахождение максимальной суммы подмассива фикс размера в массиве

// function maxSummSubarray(arr, k) {
//   let max = arr.slice(0, k).reduce((acc, curr) => acc + curr);
//   let cur = max;
//   for (let i = k; i < arr.length; i++) {
//     console.log(cur, arr[i], arr[i - k]);
//     cur = cur + arr[i] - arr[i - k];
//     console.log(cur);
//     max = Math.max(max, cur);
//   }
//   return max;
// }

// console.log(maxSummSubarray([-4, 2, 3, 1, 0, -5, 9, 8], 3));

// 2. нахождение минимальной длинны подмассива который равен сумме S
// function minLenOfSubarrayWithValueS(arr, s) {
//   let start = 0;
//   let cur = 0;
//   let minLength = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     cur = cur + arr[i];
//     while (cur >= s) {
//       minLength = Math.min(minLength, i - start + 1);
//       cur = cur - arr[start];
//       start++;
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }

// let arr = [2, 1, 5, 2, 3, 2];
// let S = 7;

// console.log(minLenOfSubarrayWithValueS(arr, S));

// //3.Длина наибольшего подмассива с нулями и единицами, имеющими равное количество
// let arr = [0, 1, 0, 0, 0, 1, 1];
// // Вывод: 6
// // Пояснение: Самый длинный подмассив с равным количеством 0 и 1 — [0, 1, 0, 1, 1, 0].

// function lookForMaxLengthOfOneAndZero(arr) {
//   let maxLength = 0;

//   // Баланс будет показывать разницу между количеством единиц и нулей
//   let balance = 0;

//   // Карта для хранения первого индекса, где был встречен каждый баланс
//   let balanceMap = new Map();

//   // Инициализируем карту так, чтобы баланс 0 соответствовал индексу -1
//   // Это позволяет учитывать подмассивы, которые начинаются с индекса 0
//   balanceMap.set(0, -1);

//   // Проходим по массиву
//   for (let i = 0; i < arr.length; i++) {
//     // Если текущий элемент 1, увеличиваем баланс на 1
//     // Если текущий элемент 0, уменьшаем баланс на 1
//     if (arr[i] === 1) {
//       balance += 1;
//     } else {
//       balance -= 1;
//     }

//     // Проверяем, встречался ли такой баланс раньше
//     if (balanceMap.has(balance)) {
//       // Если да, то находим длину подмассива с равным количеством 0 и 1
//       // Это текущий индекс i минус индекс, где был впервые встречен этот баланс
//       let previousIndex = balanceMap.get(balance);
//       let length = i - previousIndex;

//       // Обновляем максимальную длину, если текущая длина больше
//       maxLength = Math.max(maxLength, length);
//     } else {
//       // Если такой баланс не встречался, сохраняем его с текущим индексом
//       balanceMap.set(balance, i);
//     }
//   }
//   console.log(balanceMap);
//   // Возвращаем максимальную длину подмассива с равным количеством 0 и 1
//   return maxLength;
// }

// console.log(lookForMaxLengthOfOneAndZero(arr));

//4. найти максимальную сумму подмассива фиксированной длины
// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// function lookMaxSubbarray(arr, k) {
//   let start = 0;
//   let max = arr.slice(0, k).reduce((acc, curr) => acc + curr);
//   let cur = max;
//   for (let i = k; i < arr.length; i++) {
//     cur = cur - arr[start] + arr[i];
//     console.log(cur);
//     start++;
//     max = Math.max(max, cur);
//   }
//   return max;
// }

// console.log(lookMaxSubbarray(arr, k));

//Минимальная длина подмассива с суммой не меньше S
// let arr = [2, 1, 5, 2, 3, 2];
// let S = 7;

// function minLen(arr, S) {
//   let start = 0;
//   let min = Infinity;
//   let cur = 0;
//   for (let i = 0; i < arr.length; i++) {
//     cur += arr[i];
//     while (cur >= S) {
//       cur = cur - arr[start];
//       min = Math.min(min, i - start + 1);
//       start++;
//     }
//   }
//   return min;
// }
// console.log(minLen(arr, S));

// Количество подмассивов длины k с одинаковыми элементами

// let arr = [1, 1, 1, 2, 2, 2, 2];
// let k = 3;

// function quantityOfArrays(arr, k) {
//   let quan = 0;
//   for (let i = 0; i < arr.length - k; i++) {
//     let allTrueFlag = true;
//     for (let j = i; j < i + k - 1; j++) {
//       if (arr[i] !== arr[j + 1]) {
//         allTrueFlag = false;
//         break;
//       }
//     }
//     if (allTrueFlag) {
//       quan += 1;
//     }
//   }

//   return quan;
// }

// console.log(quantityOfArrays(arr, k));

//Найти среднее значение всех подмассивов длины K

// let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// let k = 5;

// function averageValue(arr, k) {
//   let res = [];
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let cur = 0;
//     for (let j = i; j <= i + k - 1; j++) {
//       cur += arr[j] / 5;
//       // console.log(cur);
//     }
//     res.push(cur);
//   }
//   return res;
// }

// console.log(averageValue(arr, k));

//Минимальная длина подмассива с суммой больше или равной S

// let arr = [2, 1, 5, 2, 3, 2];
// let S = 7;

// function minLen(arr, S) {
//   let start = 0;
//   let cur = 0;
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     cur += arr[i];
//     while (cur >= S) {
//       min = Math.min(min, i - start + 1);
//       cur = cur - arr[start];
//       start++;
//     }
//   }
//   return min;
// }
// console.log(minLen(arr, S));

// Ваня любит читать книги и у него сегодня есть t минут и n книг, каждую книгу можно
// прочитать за а минут, вычислить максимальное количество книг которое Ваня может прочитать
// если на одну книгу уходит времени больше чем у Вани есть в целом, то Ваня ее пропускает

// let n = 4;
// let t = 5;
// let arr = [3, 1, 2, 1];

// function howManyBooksIvanCanRead(arr, t) {
//   let start = 0;
//   let cur = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < t) {
//       cur += arr[i];
//     }
//     while (cur > t) {
//       cur = cur - arr[start];
//       start++;
//     }
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// }

// console.log(howManyBooksIvanCanRead(arr, t));

// Тренер хочет собрать команду по программированию из студентов, он знает что чем больше команда тем лучше, а также знает что она должна быть сбалансированна, потому
// разница в навыках у стундентов должна быть не больше 5 иначе команда будет несбалансирована, помогите тренеру собрать лучшую команду из представленного списка
// студентов
// let arr = [1, 10, 17, 12, 15, 2, 7, 8, 9];
// let n = 6;

// function createTem(arr, n) {
//   let start = 0;
//   let cur = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(start, i, arr[i], arr[i - 1], max);
//     if (Math.abs(arr[i - 1] - arr[i]) <= 5) {
//       cur += 1;
//     } else if (Math.abs(arr[i - 1] - arr[i]) > 5) {
//       cur = 0;
//       start = i;
//     }
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// }

// console.log(createTem(arr, n));

// задан массив состоящий из целых чисел, нуно разделить этот на массив на три части, таким образом
// что каждый элемент массива принадлежит ровно одной из частей и каждая часть образует
// последовательный непрперывныый подотрезок. Пусть сумма элементов первой части равна сумму элементов
// третьей части и при этом нужно выбрать такое разбинение на отрезки чтобы sum1 было максимально
// Доп условие,  подотрезок может быть пустым

// let n = 3;
// let arr = [4, 1, 2];

// function threeSubarray(arr) {
//   let r = n;
//   let first = 0;
//   let third = 0;
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     first += arr[i];
//     while (third < first) {
//       r--;
//       third += arr[r];
//     }
//     if (first === third && r > i) {
//       res = Math.max(res, first);
//     }
//   }
//   return res;
// }

// console.log(threeSubarray(arr));

// У васи есть робот расположенный на бесконечной плоскости Изначально робот в стартовой клетке 0 0
// робот может выполнять команды. Существует четыре основные команды. Доступные для выполнения:

// u - перейти из клетки (x, y) in (x,y+1)
// d - (x,y) in (x,y-1)
// l - (x,y) in (x-1, y)
// r - (x, y) in (x+1, y)
// У васи есть последовательность из н команд Вася хочет чтобы после обработки этой последовательности
// робот оказался в клетке (x,y)
// Вася хочет заменить команды так, чтобы минимизировать длину изменняемого подотрезка. Длина изменнняемого подотрезка рассчитывется
// как maxID - minID + 1, где maxID - максимальный индекс изменяемой команда а минАйди минимальный индекс изменняемой команды
// Например если вася заменит последовательность RRRRRRR on RLRRLRL то он изменил команды с индексами 2, 5 и 7
// а длина изменяемого подотрезка равна 7-2+1 = 6

let n = 3; //RULR
let queue = ["R", "U", "R", "U", "U"];
let finish = [-2, 3];

// 3
// UUU
// 100 100

// function findTheWay(n, queue, finish) {
//   //directions
//   let U = [0, 1];
//   let D = [0, -1];
//   let R = [1, 0];
//   let L = [-1, 0];
//   let cur = [0, 0];
//   let res = [];
//   for (let j = 0; j < n; j++) {
//     if (queue[j] === "U") {
//       cur[1] += 1;
//     } else if (queue[j] === "D") {
//       cur[1] -= 1;
//     } else if (queue[j] === "R") {
//       cur[0] += 1;
//     } else if (queue[j] === "L") {
//       cur[0] -= 1;
//     }
//   }
//   if (cur[0] === finish[0] && cur[1] === finish[1]) {
//     return 0;
//   } else if (n < finish[0]) {
//     return -1;
//   } else {
//     for (let i = 0; i < n; i++) {
//       let step = 0;
//       console.log(cur);
//       if (queue[i] === "U") {
//         step = 1;
//         if (step > finish[1]) {
//           cur[1] -= 1;
//           queue[i] = "D";
//           res.push(i);
//         } else {
//           cur[1] += 1;
//         }
//       } else if (queue[i] === "D") {
//         step = -1;
//         if (step < finish[1]) {
//           cur[1] += 1;
//           queue[i] = "U";
//           res.push(i);
//         } else {
//           cur[1] -= 1;
//         }
//       } else if (queue[i] === "R") {
//         step = 1;
//         if (step > finish[0]) {
//           cur[0] -= 1;
//           queue[i] = "L";
//           res.push(i);
//         } else {
//           cur[0] += 1;
//         }
//       } else if (queue[i] === "L") {
//         step = -1;
//         if (step < finish[0]) {
//           cur[0] += 1;
//           queue[i] = "R";
//           res.push(i);
//         } else {
//           cur[0] -= 1;
//         }
//       }
//     }
//   }
//   console.log(queue);
//   return res[res.length - 1] - res[0] + 1;
// }

// console.log(findTheWay(n, queue, finish));

function findMinimalChangeSegment(commands, targetX, targetY) {
  const n = commands.length;

  // Массивы смещений по осям
  const dx = new Array(n).fill(0);
  const dy = new Array(n).fill(0);

  // Заполняем массивы смещений по x и y
  for (let i = 0; i < n; i++) {
    if (commands[i] === "U") dy[i] = 1;
    if (commands[i] === "D") dy[i] = -1;
    if (commands[i] === "L") dx[i] = -1;
    if (commands[i] === "R") dx[i] = 1;
  }

  // Конечные координаты робота
  let xx = 0,
    yy = 0;
  for (let i = 0; i < n; i++) {
    xx += dx[i];
    yy += dy[i];
  }

  // Проверка на достижимость цели
  if (
    (Math.abs(targetX - xx) + Math.abs(targetY - yy)) % 2 !== 0 ||
    Math.abs(targetX) + Math.abs(targetY) > n
  ) {
    console.log(-1);
    return;
  }

  if (xx === targetX && yy === targetY) {
    console.log(0);
    return;
  }

  // Инициализация поиска минимального подотрезка
  let l = 0;
  let res = Infinity;
  console.log(xx, yy, "start");
  for (let r = 0; r < n; r++) {
    xx -= dx[r];
    yy -= dy[r];
    console.log(
      xx,
      yy,
      Math.abs(xx - targetX) + Math.abs(yy - targetY) <= r - l + 1
    );
    // Проверка на достижимость цели с текущим подотрезком
    while (Math.abs(xx - targetX) + Math.abs(yy - targetY) <= r - l + 1) {
      xx += dx[l];
      yy += dy[l];
      l++;
      console.log(xx, yy, "inWhile");
    }
    console.log(l, r, "step");
    if (l > 0) {
      res = Math.min(res, r - l + 2);
    }
  }

  // Вывод результата
  console.log(res === Infinity ? -1 : res);
}

// Пример вызова функции
let commands = "LURRUU";
let targetX = -3,
  targetY = 3;
findMinimalChangeSegment(commands, targetX, targetY);
