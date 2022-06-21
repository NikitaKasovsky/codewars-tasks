function compress(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let firstValue;
  let lastValue;
  const compressed = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 1 === sorted[i + 1]) {
      if (!firstValue) {
        firstValue = sorted[i];
      }
    } else {
      lastValue = sorted[i];
      compressed.push(firstValue ? `${firstValue}-${lastValue}` : lastValue.toString());
      firstValue = undefined;
    }
  }

  return compressed;
}

console.log(compress([1, 3, 5, 4, 2, 7, 6, 9, 11, 8, 12, 20]))

//[
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 11,
//   12, 20
// ]  -> '1-9,11-12,20'
