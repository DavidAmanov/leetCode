// function qSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     let pivot = arr[0];
//     let less = arr.slice(1).filter((item) => item <= pivot);
//     let greater = arr.slice(1).filter((item) => item > pivot);
//     return [...qSort(less), pivot, ...qSort(greater)];
//   }
// }

// console.log(qSort([56, 90, 78, 65, 88, 92, 83, 70, 85, 60]));

// практические задачи на применение алгоритма:
// Входные данные: массив целых чисел, содержащий от 10 до 1000 элементов.
// Требуется реализовать алгоритм быстрой сортировки для сортировки массива по возрастанию.
// После сортировки необходимо вывести топ-5 лучших оценок.

// function topFive(arr) {
//   function qSort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     } else {
//       let pivot = arr[0]; // выбираем элемент в массиве от которого будем отризать кусок
//       let less = arr.slice(1).filter((item) => item <= pivot);
//       let greater = arr.slice(1).filter((item) => item > pivot);
//       return [...qSort(less), pivot, ...qSort(greater)];
//     }
//   }
//   let toSort = qSort(arr);
//   return toSort.slice(5, 10);
// }

// console.log(topFive([56, 90, 78, 65, 88, 92, 83, 70, 85, 60]));

// У вас есть массив объектов, каждый из которых представляет собой информацию о заказе в интернет-магазине.
// В каждом объекте содержится информация о номере заказа и количестве товаров в заказе. Ваша задача —
// отсортировать массив по количеству товаров в заказе по возрастанию с использованием алгоритма быстрой сортировки (Quick Sort).

// let orders = [
//   { orderId: 1, itemCount: 5 },
//   { orderId: 2, itemCount: 3 },
//   { orderId: 3, itemCount: 8 },
//   { orderId: 4, itemCount: 2 },
//   { orderId: 5, itemCount: 7 },
// ];

// function sortOrders(orders) {
//   let entries = orders.map((item) => Object.entries(item));
//   function sort(entries) {
//     if (entries.length < 2) {
//       return entries;
//     } else {
//       let pivot = entries[0][1][1];
//       let less = entries.slice(1).filter((item) => item[1][1] <= pivot);
//       let greater = entries.slice(1).filter((item) => item[1][1] > pivot);
//       return [...sort(less), entries[0], ...sort(greater)];
//     }
//   }
//   let result = sort(entries).map((item) => Object.fromEntries(item));
//   return result;
// }

// console.log(sortOrders(orders));

// У вас есть массив слов, и вам нужно отсортировать его по длине слов в порядке возрастания, используя алгоритм быстрой сортировки (Quick Sort).
//После сортировки вам нужно вернуть массив слов, где слова расположены по их длине от самого короткого к самому длинному.
// Условия:
// Массив содержит строки (слова), состоящие только из букв.
// Реализуйте алгоритм быстрой сортировки самостоятельно.
// Верните отсортированный массив слов.
// Вход:
// Массив слов, например: ["apple", "banana", "kiwi", "grape", "strawberry", "orange", "plum"]
// Выход:
// Отсортированный массив слов по длине, например: ["kiwi", "plum", "grape", "apple", "orange", "banana", "strawberry"]

// function sortWords(words) {
//   if (words.length < 2) {
//     return words;
//   } else {
//     let pivot = words[0].length;
//     let less = words.slice(1).filter((item) => item.length <= pivot);
//     let greater = words.slice(1).filter((item) => item.length > pivot);
//     return [...sortWords(less), words[0], ...sortWords(greater)];
//   }
// }

// console.log(
//   sortWords([
//     "apple",
//     "banana",
//     "kiwi",
//     "grape",
//     "strawberry",
//     "orange",
//     "plum",
//   ])
// );

// Условия:
// Массив содержит объекты, каждый из которых имеет два поля: title (название статьи) и date (дата публикации в формате YYYY-MM-DD).
// Реализуйте алгоритм быстрой сортировки самостоятельно.
// После сортировки верните отсортированный массив статей.

// let dates = [
//   { title: "React Basics", date: "2023-07-21" },
//   { title: "Advanced JavaScript", date: "2022-11-10" },
//   { title: "Web Development Trends", date: "2023-05-15" },
//   { title: "Understanding TypeScript", date: "2022-01-22" },
//   { title: "CSS Grid and Flexbox", date: "2023-02-11" },
// ];

// function sortDates(dates) {
//   let entries = dates.map((item) => Object.entries(item));
//   function qSort(entries) {
//     if (entries.length < 2) {
//       return entries;
//     } else {
//       let pivot = new Date(entries[0][1][1]);
//       let less = entries
//         .slice(1)
//         .filter((item) => new Date(item[1][1]) <= pivot);
//       let greater = entries
//         .slice(1)
//         .filter((item) => new Date(item[1][1]) > pivot);
//       return [...qSort(less), entries[0], ...qSort(greater)];
//     }
//   }
//   let result = qSort(entries).map((item) => Object.fromEntries(item));
//   return result;
// }

// console.log(sortDates(dates));
