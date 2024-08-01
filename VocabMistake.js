// Дан словарь N слов, длина каждого не больше K В записи каждого из M слов текста может быть пропущена одна буква,
// нужно сказать для каждого слова входит ли оно в словарь

let text = "Show me you secret, I'm waiting for you";
let text1 = "Show me you secret, I'm waiting fo you";
let arr = text.split(" ");
let dictionary = new Set();
for (let i = 0; i < arr.length; i++) {
  dictionary.add(arr[i]);
}
console.log(dictionary);
function checkWordsIntextOnIncludesInVocab(arr, dictionary) {
  let checkSet = new Set();
  for (let item of dictionary) {
    for (let i = 0; i < item.length; i++) {
      let cur = item.slice(i, i + 1) + item.slice(i + 1);
      checkSet.add(cur);
    }
  }
  console.log(checkSet);
}
checkWordsIntextOnIncludesInVocab(arr, dictionary);
