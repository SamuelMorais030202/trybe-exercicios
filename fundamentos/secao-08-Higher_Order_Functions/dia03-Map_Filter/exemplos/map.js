const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
const fullName = persons.map((number) => {
  return `${number.firstName} ${number.lastName}`;
});

console.log(fullName);


//---------------------------------------------------------------

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]


//---------------------------------------------------------------------

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (products, prices) => {
   return products.map((product, price) => {
     // let obj = {};
     // obj[product] = prices[price]
     return {[product]: prices[price]}
     // return obj;
   })
}

console.log(listProducts(products, prices));
