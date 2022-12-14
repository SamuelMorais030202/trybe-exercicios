/*
function sum (number1, number2) {
    return number1 + number2;
}
  
const sumVariable = sum;
  
console.log(sumVariable);
console.log(sum(2, 3))
// [Function: sum]
*/


// forma correta de se atribuir uma função a uma variável.
const sum = (number1, number2) => {
    return number1 + number2;
};



// Passar funções como argumento para outras funções:

const sayHello = () => {
  return ('hello trybers');
}
  
  const printGreeting = (callback) => {
     // console.log(callback());
  }
  
  printGreeting(sayHello);


// Retornar uma função de outra função:

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(1)
console.log(initialSum(5));