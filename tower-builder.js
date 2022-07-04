function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    tower.push(i > 0 ? i + 1 + i : i + 1);
  }

  return tower.map((countStars, index) => {
    const lvl = [];
    const spaces = tower[tower.length - 1] - countStars;
    let leftLetters = spaces / 2;

    for (let i = 0; i < tower[tower.length - 1]; i++) {
      if (leftLetters) {
        lvl.push(' ');
        leftLetters = leftLetters - 1;
        continue;
      }

      if (!leftLetters && countStars) {
        lvl.push('*');
        countStars = countStars - 1;
        continue;
      }

      if (!leftLetters && !countStars) {
        lvl.push(' ');
      }
    }

    return lvl.join('');
  })
}

console.log(towerBuilder(3))
