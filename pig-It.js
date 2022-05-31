function pigIt(str){
  return str.split(' ').map(s => {
    const word = s.split('');

    if (word.join('').match(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g)) return word;

    return [...word.slice(1), word[0], 'a', 'y'].join('')
  }).join(' ')
}

console.log(pigIt('Hello world !'))