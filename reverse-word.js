const reverseWords = (str) => str.split(' ').map(word => word.split('').reverse().join('')).join(' ')

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
