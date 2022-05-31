function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null

  return ls.reduce((a, b) => a + b)
}

ts = [50, 55, 57, 58, 60]

console.log(chooseBestSum(174, 3, ts))
