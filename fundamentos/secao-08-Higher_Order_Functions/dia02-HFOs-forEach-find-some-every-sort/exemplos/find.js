const numbers = [19, 21, 30, 3, 45, 22, 15];

const veryfiyNumberPar = numbers.find((number) => number % 2 === 0);
const veryfiyNumberImpar = numbers.find((number) => number % 2 !== 0);

console.log(veryfiyNumberPar);
console.log(veryfiyNumberImpar);
