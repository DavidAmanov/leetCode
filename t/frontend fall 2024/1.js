let f = "1-6,8-9,11";

function parseIntervals(intervalString) {
  const intervals = intervalString.split(",");

  let result = "";

  intervals.forEach((interval, index) => {
    if (interval.includes("−")) {
      const [start, end] = interval.split("−").map(Number);
      for (let i = start; i <= end; i++) {
        result += i + " ";
      }
    } else {
      result += interval + " ";
    }
  });

  console.log(result.trim());
}

// Пример использования функции
const inputString = "1−6,8−9,11";
restoreSet(inputString);
