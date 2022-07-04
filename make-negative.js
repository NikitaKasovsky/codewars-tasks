const makeNegative = (n) => n.toString().includes('-') ? n : +['-', n].join('');

console.log(makeNegative(-9))
