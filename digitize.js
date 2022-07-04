function digitize(n) {
   if (n.toString().includes('-')) return 'is negative';

   return n.toString().split('').reverse().map(n => +n);
}

console.log(digitize(348597))
