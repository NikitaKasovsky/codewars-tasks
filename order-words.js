function order(words) {
  if (!words) return '';

  return words.split(' ').map(word => {
    return {pos: +word.match(/\d+/g), text: word}
  }).sort((a, b) => a.pos < b.pos ? -1 : 1).map(wordObj => wordObj.text).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'))
