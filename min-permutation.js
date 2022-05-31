function minPermutation(n) {
  const numberElms = n.toString().split('');
  const zero = numberElms.filter(a => a === '0').join('');
  const minus = numberElms.find(a => a === '-');
  return +[minus, ...numberElms.filter(a => a !== '0' && a !== '-').sort((a, b) => a - b).map((v, i) => i === 0 && zero ? v + zero : v)].join('');
}

console.log(minPermutation(1010101000101))