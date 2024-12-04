function flat(arr, depth = 1) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      let temp = flat(arr[i], depth - 1);
      result.push(...temp);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flat([1, 2, [3, 4, [5, 6, [2, 3]]]], 2)); // [1, 2, 3, 4, 5, 6, [2,3]]
