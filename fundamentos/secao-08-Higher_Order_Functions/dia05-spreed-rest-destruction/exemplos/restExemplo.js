function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  // console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  // console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

  
  //------------------------------------------------------------------------------

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
const arr = [0, 3, 4];
const arr2 = [1, 2, 5];
console.log(sum(...arr, ...arr2)); // 15