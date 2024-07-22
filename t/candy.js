// n - количество конфет которое хочет петя
// k - минимальное количество конфет которое выдает аппарат
// a и m - параметры последовательности, которые определяют монету которую достанет петя из кармана
// нужно вывести количество монет которое достанет петя прежде чем купит нужное количество конфет
let n = 3
let k = 1000
let a = 252149039n
let m = 281474977n

function lcg(e) {
    return (a * e + 11n) % m;
}

// // Генератор монет
function* generator(seed) {
    seed = BigInt(seed);
    while (true) {
        seed = lcg(seed);
        yield((Math.abs(Number(seed % 3n) - 1) * 5 + Math.abs(Number(seed % 3n)) * 2) % 8);
    }
}
let coins = []
// Функция для вычисления минимального количества монет
function calculateMinimumCoinsNeeded(n, k) {
    const gen = generator(0n);
    let totalCandies = 0;
    let totalMoney = 0;
    let coinsInserted = 0;

    while (totalCandies < n) {
        let coin = gen.next().value;
        coins.push(coin)
        totalMoney +=coin
        coinsInserted++
        if(totalMoney>=k*3){
            totalCandies+=k
            if(totalCandies>=n){
                return coinsInserted 
            }
        }
    }

    return coinsInserted;
}

console.log(calculateMinimumCoinsNeeded(n, k, a, m));
console.log(coins)
let total = 0
for(let i = 0; i<1147; i++){
    total = total + coins[i]
}
console.log(total, 'total')
