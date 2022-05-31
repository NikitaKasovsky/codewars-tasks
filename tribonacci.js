function tribonacci(signature, n) {
  const iterations = n - signature.length;

  if (n < signature.length) {
    return signature.reverse().slice(iterations * -1).reverse()
  }

  for (let i = 0; i < iterations; i++) {
    signature = [...signature, signature.slice(i > 0 ? i : 0).reduce((p, c) => p + c)];
  }

  return n ? signature : [];
}

console.log(tribonacci([13, 7, 20], 1))