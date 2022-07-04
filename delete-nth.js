const deleteNth = (arr, n) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.filter((el) => el === arr[i]).length >= n) {
      continue;
    }

    result.push(arr[i]);
  }

  return result;
};

console.log(deleteNth([1,2,3,1,2,1,2,3], 2))
