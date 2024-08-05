// Дан словарь N слов, длина каждого не больше K В записи каждого из M слов текста может быть пропущена одна буква,
// нужно сказать для каждого слова входит ли оно в словарь

let text = "Show me you secret, I'm waiting for you";
let text1 = "Show me you secret, I'm waiting fo you Kirill";
let arr = text.split(" ");
let dictionary = new Set();
for (let i = 0; i < arr.length; i++) {
  dictionary.add(arr[i]);
}
console.log(dictionary);
function checkWordsIntextOnIncludesInVocab(text1, dictionary) {
  let checkSet = new Set();
  for (let item of dictionary) {
    checkSet.add(item);
    for (let i = 0; i < item.length; i++) {
      let cur = item.substr(0, i) + item.substr(i + 1, item.length);
      checkSet.add(cur);
    }
  }
  console.log(checkSet);
  let arr = text1.split(" ");
  for (let k = 0; k < arr.length; k++) {
    if (!checkSet.has(arr[k])) {
      return false;
    }
  }
  return true;
}
console.log(checkWordsIntextOnIncludesInVocab(text1, dictionary));
