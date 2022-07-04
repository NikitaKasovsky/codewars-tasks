function getCount(str, count = 0) {
  str.split('').forEach(word => word.match(/[aeiou]/) ? count = count + 1 : null);
  return count
}

console.log(getCount('abracadabra'))
