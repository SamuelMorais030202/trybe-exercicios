const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
const fullName = persons.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`)

// console.log(fullName);

//---------------------------------------------------------------

const numbers = [1, 2, 3, 4, -5];

const newArray = numbers.map((number) => (number > 0) ? number * -1
  : number);
console.log(numbers);
console.log(newArray);

//---------------------------------------------------------------------

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (produtos, precos) => {
  return produtos.map((produto, index) => {
    return {
      [produto]: precos[index],
    }
  })
}

console.log(listProducts(products, prices));
