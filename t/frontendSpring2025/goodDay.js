// Чтобы набрать форму к лету, Виктория решила бегать каждый день. До лета осталось всего  дней — именно на протяжении этого срока она и будет бегать. Ее личный тренер уже составил ей расписание: в -й день Виктория должна пробежать  километров.
// Виктория считает i-й(3<=i<=n)  день хорошим, если в этот день она пробежит не меньше, чем в первый день, и не больше, чем во второй день. Расписание же ей понравится, если хотя бы  дней будут хорошими. В расписании можно делать корректировки: произвольное ai(1<=n<=n)  можно увеличить 1 или уменьшить на 1 километр. Разрешается корректировать один и тот же день несколько раз.
// Какое минимальное корректировок необходимо внести в расписание, чтобы оно понравилось Виктории?
// Формат входных данных
// Первая строка содержит числа  n и m  — количество дней до лета и количество хороших дней, которое необходимо Виктории, чтобы ей понравилось расписание.
// Следующая строка содержит числа a1, a2, .... , an , где ai — количество километров, которое должна пробежать Виктория согласно начальному расписанию.
// Формат выходных данных
// Выведите одно число — минимальное количество корректировок, которое необходимо внести в расписание, чтобы оно понравилось Виктории.
// Комментарий к примеру
// В примере можно дважды уменьшить a3 на единицу, чтобы расписание понравилось Виктории

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const goodDay = (n, m, daysLine) => {
  let countOfChanges = 0;
  let firstDay = parseInt(daysLine[0]);
  let secondDay = parseInt(daysLine[1]);
  let badDayes = [];
  let countGoodDayes = 0;
  let howMuchDayYouNeedToFix = 0;
  //the sceduale is good if count of goodDays >= m
  for (let i = 2; i < daysLine.length; i++) {
    if (
      parseInt(daysLine[i]) >= firstDay &&
      parseInt(daysLine[i]) <= secondDay
    ) {
      countGoodDayes++;
    } else {
      badDayes.push(
        Math.min(
          Math.abs(parseInt(daysLine[i]) - secondDay),
          Math.abs(parseInt(daysLine[i]) - firstDay)
        )
      );
    }
  }
  if (countGoodDayes >= m) {
    return countOfChanges;
  } else {
    howMuchDayYouNeedToFix = m - countGoodDayes;
    badDayes.sort();
    while (howMuchDayYouNeedToFix > 0) {
      countOfChanges += badDayes.shift();
      howMuchDayYouNeedToFix--;
    }
    return countOfChanges;
  }
};

rl.on("line", (line) => {
  const input = line;
  const n = parseInt(input[0]);
  const m = parseInt(input[1]);

  rl.once("line", (line) => {
    const daysLine = line;
    console.log(goodDay(n, m, daysLine));
    rl.close();
  });
});
