function topThreeWords(text) {
  const splitArr = text.replace(/[\-\(\)\.\^\+\..\...\'\,]/g, ' ').split(' ');
  let solvedArr = [{text: splitArr[0], count: 1}];

  splitArr.forEach((word, index) => {
    if (index > 0) {
      const solvedWordIndex = solvedArr.findIndex(w => w.text === word);

      if (solvedWordIndex !== -1) {
        solvedArr[solvedWordIndex] = {...solvedArr[solvedWordIndex], count: solvedArr[solvedWordIndex].count + 1};
      } else {
        solvedArr.push({text: word, count: 1})
      }
    }
  });

  solvedArr = solvedArr.filter(el => el.text !== '').filter(el => el.text);
  solvedArr.sort((a, b) => a.count > b.count ? -1 : 1);
  solvedArr.length = 3;
  return solvedArr.map(el => el.text);
}

console.log(topThreeWords('  , e   .. '))
