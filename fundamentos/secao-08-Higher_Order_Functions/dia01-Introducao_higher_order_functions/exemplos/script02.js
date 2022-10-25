/*
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
*/

// Estruturando uma HOF

/*
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);
*/

// Vamos aumentar um pouco o nível de complexidade 
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
 const par = (number) => {
    if (number % 2 === 0) {
       console.log(`${number} é par`)
    }
 }

 const impar = (number) => {
    if (number % 2 !== 0) console.log(`${number} é impar`);
 }
  
  repeat(3, par); // Testa quais números serão pares;
  repeat(3, impar); // Testa quais números serão ímpares;

// gerando um número aleatório

const numberGenerator = () => {
    return Math.floor(Math.random() * 100);
  }
  
console.log(numberGenerator());