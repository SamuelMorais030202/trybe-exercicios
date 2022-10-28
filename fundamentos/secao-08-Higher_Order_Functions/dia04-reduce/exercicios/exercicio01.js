// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    const newArray = arrays.reduce((acc, curr) => {
      return [
        acc + curr
      ]
    });
    return newArray;
  }
  // console.log(flatten(arrays));