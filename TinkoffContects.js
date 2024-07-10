/*1. You need to check can the given set of leters concatinate the word TINKOFF 
    test cases:
    "ASSASASASASADADAD"
    "ASA"
    "TINKOFF"
    "FOFKNIT"
*/
//надо использовать Маp мы создаем его из строки тинькоф и добавляем каждую букву со значением 0, проходим по массиву букв привезенных в офис
//и делаем проверку если эта буква в мепе, если есть до добавляем единицу к значению, по итогу, если конечный мэп будет содрежать нужный набор значений
//а у нас это 1 1 1 1 1 2, тогда выводим Yes, если нет то No
let answer = [1, 1, 1, 1, 1, 2]
let tin = "TINKOFF"
let tinkMap = new Map()
for(let i = 0; i< tin.length; i++){
    tinkMap.set(tin[i], 0)
}
console.log(tinkMap)
let setLeters = ["T", "I", "N", "K", "O", "F", "F"];

function checkTheSet(setLeters){
    for(let i = 0; i < setLeters.length; i++){
        if(tinkMap.has(setLeters[i])) tinkMap.set(setLeters[i], tinkMap.get(setLeters[i])+1)
    }
    for(let j = 0; j < tinkMap.size; j++){
        if(tinkMap.get(tin[j]) !== answer[j]){
            return 'NO'
        } else{
            return 'YES'
        }
    }
}

console.log(checkTheSet(setLeters))