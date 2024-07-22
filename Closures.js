1//

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

function createCallCounter(fn) {
    let count = 0;

    return function() {
        count += 1;
        return console.log(`${count}: `) + fn();
    };
}

function sayHello() {
    console.log('Hello');
}

const countedSayHello = createCallCounter(sayHello);
countedSayHello(); // 1: Hello
countedSayHello(); // 2: Hello
countedSayHello(); // 3: Hello