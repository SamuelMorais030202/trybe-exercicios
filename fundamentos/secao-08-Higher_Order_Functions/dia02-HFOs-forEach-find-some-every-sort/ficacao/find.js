const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return number
  }
};
numbers.find(findDivisibleBy3And5)

console.log(numbers.find(findDivisibleBy3And5))