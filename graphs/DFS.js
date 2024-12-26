//список ребер:
// сначала идет количество вершин и ребер графа
// 8 8
// затем указание вершин между которыми лежит ребро
// 0 4
// 4 1
// 2 1
// 5 2
// 4 5
// 4 6
// 7 5
// 6 7

//матрица смежности
// количество строк и столбцов в этой матрице равняется количеству вершин в графе
// пример таблицы для неориентированного графа
//   0 1 2 3 4 5 6 7
// 0 0 0 0 0 1 0 0 0
// 1 0 0 1 0 1 0 0 0
// 2 0 1 0 0 0 1 0 0
// 3 0 0 0 0 0 0 0 0
// 4 1 1 0 0 0 1 1 0
// 5 0 0 1 0 1 0 0 1
// 6 0 0 0 0 1 0 0 1
// 7 0 0 0 0 0 1 1 0

// если граф неориентинрован то мы добавляем в матрицу смежности две единицы

// создаем матрицу смежности по списку ребер
// let col = 8,
//   row = 8;
// let pars = [
//   [0, 4],
//   [4, 1],
//   [2, 1],
//   [5, 2],
//   [4, 5],
//   [4, 6],
//   [7, 5],
//   [6, 7],
// ];
// let size = 8;
// let matrix = Array.from({ length: 8 }, () => Array(8).fill(0));
// console.log(matrix);
// for (let i = 0; i < pars.length; i++) {
//   for (let j = 0; j < pars[i].length - 1; j++) {
//     matrix[pars[i][j]][pars[i][j + 1]] = 1;
//   }
// }

// используем деструктуризацию
// for (let i = 0; i < pars.length; i++) {
//   const [from, to] = pars[i];
//   matrix[from][to] = 1;
// }

// console.log(matrix);

//списки смежности
// представляет собой список векторов, каждый вектор представляет собой вершину
// вектор хранит список вершин с которыми он соединен

// let list = [];
// for (let i = 0; i < pars.length; i++) {
//   list.push([]);
// }
// for (let i = 0; i < pars.length; i++) {
//   list[pars[i][0]].push(pars[i][1]);
// }
// console.log(list);

//поиск в глубину DFS
// Идея заключается в том, что мы двигаемся от начальной вершины (точки, места) в определенном
// направлении (по определенному пути) до тех пор, пока не достигнем конца пути
// или пункта назначения (искомой вершины). Если мы достигли конца пути, но он не является
// пунктом назначения, то мы возвращаемся назад (к точке разветвления или расхождения путей)
// и идем по другому маршруту.
// let visited = new Set();
//реализация для списка смежности
// function dfs(list, start, finish) {
//   if (start === finish) return true;
//   if (visited.has(start)) return false;

//   visited.add(start);
//   for (sosed of list[start]) {
//     let goal = dfs(list, sosed, finish);
//     if (goal) return true;
//   }
//   return false;
// }
// console.log(dfs(list, 0, 7));

//реализация для матрицы смежности

// function dfs(matrix, start, finish) {
//   if (start === finish) return true;
//   if (visited.has(start)) return false;
//   visited.add(start);

//   for (let i = 0; i < matrix[start].length; i++) {
//     console.log(matrix[start]);
//     if (matrix[start][i] === 1) {
//       let goal = dfs(matrix, i, finish);
//       if (goal) return true;
//     }
//   }
//   return false;
// }

// console.log(dfs(matrix, 0, 7));

//Простые задачи решаемые поиском в глубину https://notes.algoprog.ru/dfs/04_2_simple.html
// 1. Проверка достижимости одной вершины из другой
// 2. Поиск компонент связности:

// let size = [8, 8];
// let pars = [
//   [1, 5],
//   [5, 2],
//   [3, 2],
//   [6, 3],
//   [5, 6],
//   [5, 7],
//   [8, 6],
//   [7, 8],
// ];

//перевод в список смежности:

// let list = [];
// for (let i = 0; i <= pars.length; i++) {
//   list.push([]);
// }

// for (let i = 0; i < pars.length; i++) {
//   list[pars[i][0]].push(pars[i][1]);
//   list[pars[i][1]].push(pars[i][0]);
// }

// function dfs(list, start, visited) {
//   if (visited.has(start)) return;
//   visited.add(start);
//   for (let neigbor of list[start]) {
//     if (!visited.has(neigbor)) {
//       dfs(list, neigbor, visited);
//     }
//   }
// }

// // console.log(list);

// // let visited = new Set();

// // console.log(dfs(list, 7, 4));
// // if (visited.size < list.length) {
// //   console.log("граф не связан");
// // } else {
// //   console.log("граф связнный");
// // }

// // определяем количество компонентов связности
// let count = 0;
// let visited = new Set();
// for (let i = 1; i < list.length - 1; i++) {
//   if (!visited.has(i)) {
//     dfs(list, i, visited);
//     count++;
//   }
// }
// console.log(count, visited);

// красим компоненты связности

// let count = 1;
// let components = [];
// let visited = new Set();

// function dfs(list, vertex, visited, count) {
//   if (visited.has(vertex)) return;
//   visited.add(vertex);
//   components[vertex] = count;
//   for (let neigbor of list[vertex]) {
//     dfs(list, neigbor, visited, count);
//   }
// }

// for (let i = 1; i < list.length - 1; i++) {
//   if (!visited.has(i)) {
//     dfs(list, i, visited, count);
//     count++;
//   }
// }
// console.log(components);

// поиск компонента связности в неявном графе, интерпретация карты

// let size = [8, 8];

// let map = [
//   [".", "#", "#", ".", ".", "#", "#", "."],
//   [".", "#", ".", ".", ".", "#", "#", "#"],
//   [".", "#", "#", ".", ".", "#", ".", "."],
//   [".", ".", "#", "#", ".", ".", ".", "."],
//   ["#", ".", ".", ".", ".", ".", "#", "#"],
//   [".", ".", ".", ".", ".", ".", "#", "#"],
//   [".", "#", "#", "#", ".", ".", ".", "."],
//   [".", ".", ".", "#", "#", ".", ".", "."],
// ];

// let visited = Array.from({ length: size[0] }, () => Array(size[1]).fill(0));

// function dfs(x, y, visited) {
//   visited[y][x] = 1;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];

//   for (let i = 0; i < dx.length; i++) {
//     let ty = y + dy[i];
//     let tx = x + dx[i];
//     if (
//       ty < size[0] &&
//       tx < size[0] &&
//       ty >= 0 &&
//       tx >= 0 &&
//       map[ty][tx] === "#" &&
//       visited[ty][tx] === 0
//     ) {
//       dfs(tx, ty, visited);
//     }
//   }
// }

// let count = 0;

// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "#" && visited[i][j] === 0) {
//       dfs(j, i, visited);
//       count++;
//     }
//   }
// }

// console.log(count);

// теперь покрасим эти острова
// let colors = Array.from({ length: size[0] }, () => Array(size[1]).fill(0));

// function dfs(x, y, visited, count) {
//   visited[y][x] = count;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];

//   for (let i = 0; i < dx.length; i++) {
//     let ty = y + dy[i];
//     let tx = x + dx[i];
//     if (
//       ty < size[0] &&
//       tx < size[0] &&
//       ty >= 0 &&
//       tx >= 0 &&
//       map[ty][tx] === "#" &&
//       visited[ty][tx] === 0
//     ) {
//       dfs(tx, ty, visited, count);
//     }
//   }
// }

// let count = 0;

// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "#" && visited[i][j] === 0) {
//       count++;
//       dfs(j, i, visited, count);
//     }
//   }
// }

// console.log(visited);

//поиск циклов в графе
// в графе есть цикл, если при обходе в глубину мы встретим вершину, которую мы начали,
// но еще не закончили обрабатывать

// function dfs(start, list, visited, hasCycle) {
//   visited[start] = 1;
//   for (let neibor of list[start]) {
//     console.log(visited[neibor]);
//     if (visited[neibor] === 0) {
//       dfs(neibor, list, visited, hasCycle);
//     } else if (visited[neibor] === 1) {
//       return (hasCycle.value = true);
//     }
//   }
//   visited[start] = 2;
// }

let pars = [
  [1, 5],
  [5, 2],
  [3, 2],
  [6, 3],
  [5, 6],
  [5, 7],
  [8, 6],
  [7, 8],
];

let list = Array.from({ length: 9 }, () => Array(0).fill(0));

for (let i = 0; i < pars.length; i++) {
  list[pars[i][0]].push(pars[i][1]);
  list[pars[i][1]].push(pars[i][0]);
}

let visited = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//восстановление цикла (вывод списка вершин которые образуют цикл)
// с помощью массива from
let from = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function getCycle(neibor) {
  let lastVertex = [neibor];
  for (let i = from[neibor]; i !== neibor; i = from[i]) {
    lastVertex.push(i);
  }
  lastVertex.reverse();
  return lastVertex;
}

function dfs(start, list, visited, from, cycle) {
  visited[start] = 1;
  for (let neibor of list[start]) {
    if (visited[neibor] === 1) {
      from[neibor] = start;
      cycle = getCycle(neibor);
      if (cycle) return cycle;
    } else if (visited[neibor] === 0) {
      dfs(neibor, list, visited, from);
      if (cycle) {
        return;
      }
    }
  }
  visited[start] = 2;
  return null;
}
let cycle = null;
for (let i = 0; i < list.length; i++) {
  if (visited[i] === 0) {
    dfs(i, list, visited, from, cycle);
    if (cycle) break;
  }
}
console.log(l);
