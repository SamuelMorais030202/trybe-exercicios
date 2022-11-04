//--------Array de strings se comportando com o sort---------------
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
// console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]



//------Array de números se comportando com o sort----------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

//corrigindo
console.log(numbers.sort((a, b) => a - b)); // crescente
console.log(numbers.sort((a, b) => b - a)); // decrescente