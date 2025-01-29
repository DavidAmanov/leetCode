//

// function createCounter() {
//     let count = 0
//     return function increment(){
//         count+=1
//         return count
//     }
// }

// var counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//2
// function createCounter(start) {
//     return function increment (){
//         start+=1
//         return start
//     }
// }

// const counter = createCounter(10);
// console.log(counter()); // 11
// console.log(counter()); // 12
// console.log(counter()); // 13

//3
// function createIdGenerator() {
//     let randomDip = 10
//     return function randomFunc(){
//         return Math.random()*randomDip
//     }
// }

// const idGenerator = createIdGenerator();
// console.log(idGenerator()); // 1
// console.log(idGenerator()); // 2
// console.log(idGenerator()); // 3

//4
// Создайте функцию createPerson, которая возвращает объект с методами getName и setName.
// Внутри этой функции должна быть переменная name, которая недоступна извне.
// function createPerson(initialName) {
//     let name = initialName
//     return {
//         getName: function(){
//             return name
//         },
//         setName: function(newName){
//             name = newName
//         }
//     }
// }

// const person = createPerson('John');
// console.log(person.getName()); // John
// person.setName('Doe');
// console.log(person.getName()); // Doe

// function createMultiplier(multiplier) {
//     let num = multiplier
//     return function multiplay(number){
//         return number* num
//     }
// }

// const double = createMultiplier(2);
// console.log(double(5)); // 10
// console.log(double(10)); // 20

// const triple = createMultiplier(3);
// console.log(triple(5)); // 15
// console.log(triple(10)); // 30

// function createLogger() {
//     return {
//         log:function(message){
//             return console.log(message)
//         },
//         warn:function(message){
//             return console.warn(message)
//         },
//         error:function(message){
//             return console.error(message)
//         }
//     }
// }

// const logger = createLogger();
// logger.log('This is a log message');   // LOG: This is a log message
// logger.warn('This is a warning');      // WARN: This is a warning
// logger.error('This is an error');

// function createCallCounter(fn) {
//     let count = 0;

//     return function() {
//         count += 1;
//         return console.log(`${count}: `) + fn();
//     };
// }

// function sayHello() {
//     console.log('Hello');
// }

// const countedSayHello = createCallCounter(sayHello);
// countedSayHello(); // 1: Hello
// countedSayHello(); // 2: Hello
// countedSayHello(); // 3: Hello

// function memoraized(value) {
//   return function () {
//     return value;
//   };
// }

// const check = memoraized("kuku");
// console.log(check());
// console.log(check());
// console.log(check("tutu"));

// function createState(startValue) {
//   let value = startValue;
//   return {
//     getState() {
//       return value;
//     },
//     setState(newValue) {
//       value = newValue;
//     },
//   };
// }

// const testObject = createState(10);
// console.log(testObject.getState());
// testObject.setState(23);
// console.log(testObject.getState());

// function createTimer() {
//   let time = 0;
//   let intervalId;
//   return {
//     start() {
//       intervalId = setInterval(() => {
//         time++;
//       }, 1000);
//     },
//     pause() {
//       clearInterval(intervalId);
//     },
//     getTime() {
//       console.log(time);
//     },
//   };
// }

// const time = createTimer();
// time.start();
// setInterval(() => time.getTime(), 1000);
// setTimeout(() => time.pause(), 5000);
// setTimeout(() => time.start(), 10000);

// function filterRange(min, max) {
//   return function (number) {
//     if (number >= min && number <= max) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

// const filterInRange = filterRange(4, 8);

// console.log(filterInRange(3));
// console.log(filterInRange(4));
// console.log(filterInRange(5));
// console.log(filterInRange(8));

// function memoize(fn) {
//   let map = new Map();
//   return function (argument) {
//     if (map.has(argument)) {
//       return map.get(argument);
//     } else {
//       let result = fn(argument);
//       map.set(argument, result);
//       return result;
//     }
//   };
// }

// function createTaskQueue(limit) {
//   let stack = [];
//   let running = 0;

//   function runningTask() {
//     if (running < limit && stack.length > 0) {
//       running++;
//       const task = stack.shift();
//       task().then(() => {
//         running--;
//         runningTask();
//       });
//     }
//   }

//   return {
//     addTask(task) {
//       stack.push(task);
//     },
//     runTask() {
//       while (running < limit) {
//         running++;
//         runningTask();
//       }
//     },
//   };
// }

// const taskQueue = createTaskQueue(5);
// taskQueue.addTask(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve("Task 1 completed"), 1000)
//     )
// );
// taskQueue.addTask(
//   () =>
//     new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 500))
// );
// taskQueue.addTask(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve("Task 3 completed"), 2000)
//     )
// );
// taskQueue.addTask(
//   () =>
//     new Promise((resolve) => setTimeout(() => resolve("Task 4 completed"), 300))
// );
// console.log(taskQueue.runTask());

// const debounce = (fn) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), 2000);
// //   };
// };

// const debouncedLog = debounce(() => console.log("popa"));

// debouncedLog();
// debouncedLog();
// debouncedLog();
// const try2 = () => setTimeout(() => debouncedLog(), 4000);
// try2();

// const throttling = (fn, interval) => {
//   let startTime = new Date().getTime();
//   return function (...args) {
//     console.log(startTime);
//     let currentTime = new Date().getTime();
//     if (currentTime - startTime >= interval) {
//       fn(...args);
//       startTime = currentTime;
//     }
//   };
// };

// const trottledLog = throttling(() => console.log("jopa"), 100);

// trottledLog();
// trottledLog();

// setTimeout(() => trottledLog(), 300);

function sum(first) {
  return function (second) {
    return first + second;
  };
}

const sumurry = sum(1);

console.log(sumurry(2));
