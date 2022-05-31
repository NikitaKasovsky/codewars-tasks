function isNarcissistic(n) {
  const numbers = n.toString().split('').map(v => +v);
  return n === numbers.reduce((p, c, index) => {
    if (index === 1) {
      return p**numbers.length + c**numbers.length;
    }
    return p + c**numbers.length;
  });
}

console.log(isNarcissistic(54748))