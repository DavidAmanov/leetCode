// Задача:
// Представим, что у нас есть небольшой лабиринт, представленный в виде двумерного массива, где:

// 0 — это свободный путь, по которому можно пройти.
// 1 — это стена, через которую нельзя пройти.
// S — это стартовая позиция.
// E — это выход, к которому нужно найти путь.
// Задача: Написать функцию, которая использует поиск в ширину (BFS),
// чтобы найти кратчайший путь от старта до выхода и вернёт длину этого пути.
// Если пути нет, функция должна вернуть -1.

// const maze = [
//   ["S", "0", "1", "0"],
//   ["1", "0", "1", "0"],
//   ["0", "0", "0", "0"],
//   ["1", "1", "1", "E"],
// ];

// //   Шаг 1: Инициализация
// // Первым делом нужно найти стартовую позицию S в лабиринте и подготовить всё для
// // выполнения поиска в ширину. Мы создадим очередь для BFS и массив для отслеживания
// // посещенных клеток.

// function findStartPosition(maze) {
//   for (let i = 0; i < maze.length; i++) {
//     for (let j = 0; j < maze[i].length; j++) {
//       if (maze[i][j]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// function bfs(maze, start) {
//   const rows = maze.length; //количествео строк
//   const cols = maze[0].length; //количество столбцов

//   const directions = [
//     [-1, 0], //вверх
//     [1, 0], //вниз
//     [0, -1], //влево
//     [0, 1], //вправо
//   ];

//   const queue = [[...start, 0]]; //передаем стартовое значение в координатах строка колонка и расстояние от старта
//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
//   visited[start[0]][start[1]] = true;
//   while (queue.length > 0) {
//     const [currentRow, currentCol, distance] = queue.shift();
//     if (maze[currentRow][currentCol] === "E") {
//       return distance;
//     }
//     for (let [dr, dc] of directions) {
//       const newRow = currentRow + dr;
//       const newCol = currentCol + dc;
//       if (
//         newRow >= 0 &&
//         newRow < rows &&
//         newCol >= 0 &&
//         newCol < cols &&
//         maze[newRow][newCol] !== "1" &&
//         !visited[newRow][newCol]
//       ) {
//         visited[newRow][newCol] = true;
//         queue.push([newRow, newCol, distance + 1]);
//       }
//     }
//   }
//   return -1;
// }

// const start = findStartPosition(maze);
// if (start) {
//   const result = bfs(maze, start);
//   console.log("длина пути до выхода", result);
// } else {
//   console.log("стартовая позиция не найдена", start);
// }

// const labirint = [
//   [".", "#", ".", "."],
//   [".", "#", ".", "."],
//   [".", ".", ".", "."],
//   ["#", ".", "#", "E"],
// ];

// let start = [0, 0];
// function BFS(labirint, start) {
//   //определим размер лабиринта:
//   const rows = labirint.length;
//   const cols = labirint[0].length;

//   //define the directions
//   const directions = [
//     [-1, 0], //вверх
//     [1, 0], //вниз
//     [0, -1], //влево
//     [0, 1], //вправо
//   ];

//   //create the array of visited cell
//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
//   visited[start[0]][start[1]] = true; //начинаем с этой точки, потому ее можно не обходить в цикле и сразу обозначить как посещенную

//   const queue = [[...start, 0]];
//   while (queue.length > 0) {
//     const [x, y, dist] = queue.shift(); //достаем первую координату в очереди
//     if (labirint[x][y] === "E") {
//       //проверяем не конец ли она
//       return dist;
//     }
//     for (let [dx, dy] of directions) {
//       const newX = x + dx;
//       const newY = y + dy;
//       console.log(newX, newY);
//       //need to check newX and newY > 0= and <rows and cols length
//       if (
//         newX >= 0 &&
//         newY >= 0 &&
//         newY < cols &&
//         newX < rows &&
//         !visited[newX][newY] &&
//         labirint[newX][newY] !== "#"
//       ) {
//         visited[newX][newY] = true;
//         console.log(visited);
//         queue.push([newX, newY, dist + 1]);
//       }
//     }
//   }
//   return -1;
// }
// console.log(BFS(labirint, start));

const labirint = [
  [".", "#", ".", "."],
  [".", "#", ".", "."],
  [".", ".", ".", "."],
  ["#", ".", "#", "E"],
];

let start = [0, 0];
