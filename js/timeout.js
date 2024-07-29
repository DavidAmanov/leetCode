// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn.
// Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// не знаю, мб у меня слишком плохой анг, но понять что тут имеют ввиду сложнее чем сделать, итак в чем суть, тебе даны на вход
// следующие аргументы, функция, просто аргументы и временной интервал, который указывает через какое время запускать функцию которую тебе дали на вход
// тебе же нужно определить свою функцию, которую ты будешь возвращать в случае если временной интервал который тебе передали больше чем стандартный в 50 мс
// также эта функция должна отменять работу той функции, которую тебе передали

// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

var cancellable = function (fn, args, t) {
  let timer; // определяем флаг
  const cancelTimeMs = 50; // определяем стандартный интервал
  const cancelFn = () => {
    //  определяем функцию, которую должны вернуть в том случае если t>cancelTimeMs (это не совсем так, но так просто понятнее)
    if (timer !== undefined) {
      // проверяем, если функция fn сработала (то есть t<cancelTimeMs) то она тогда результат свой работы она записала в переменную timer и тогда она точно не undefined
      clearTimeout(timer); // а если функция не сработала и timer до сих пор undefined, тогда мы сбрасываем таймер у этой функции fn через переменную timer
    }
  };
  timer = setTimeout(() => {
    // запускаем функцию fn через t мс
    fn(...args);
  }, t);
  setTimeout(cancelFn, cancelTimeMs); //запускаем тайпер функции cancelFn
  return cancelFn;
};
