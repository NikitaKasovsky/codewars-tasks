function beeramid(bonus, price) {
  let beerBank = Math.floor(bonus / price);
  let result = 0;
  for (let i = 1; i <= beerBank; i++) {
    const level = beerBank - i**2;
    if (i > level && level) continue;

    beerBank = level;
    result = result + 1;
  }
  return result
}

console.log(beeramid(4, 4))