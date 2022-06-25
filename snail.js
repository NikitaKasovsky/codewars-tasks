function snail(matrix) {
  if (!matrix.find(el => Array.isArray(el))) return matrix;

  const snailedElements = matrix.filter(el => Number.isInteger(el));
  const firstLayer = matrix.find(el => Array.isArray(el));
  const turnMatrix = [];
  matrix = matrix.filter(el => Array.isArray(el));
  matrix = matrix.slice(1, matrix.length);

  for (let i = 0; i < firstLayer.length; i++) {
    const newLayer = [];
    matrix.forEach((el, index) => {
      newLayer.push(el.reverse()[0]);
      matrix[index] = matrix[index].reverse().slice(0, el.length - 1);
    });
    turnMatrix.push(newLayer);
  }

  return snail([...snailedElements, ...firstLayer, ...turnMatrix]);
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// [[1,2,3],
//  [4,5,6],
//  [7,8,9]] => [1,2,3,6,9,8,7,4,5]
