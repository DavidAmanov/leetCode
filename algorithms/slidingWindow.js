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

let arr = [2, 1, 5, 2, 3, 2];
let S = 7;
