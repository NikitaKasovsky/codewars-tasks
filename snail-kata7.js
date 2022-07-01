const snail = (col, d, n, res = 1) => (col - d) > 0 ? snail(col - d + n, d, n, res + 1) : res;

console.log(snail(10, 3, 2))
