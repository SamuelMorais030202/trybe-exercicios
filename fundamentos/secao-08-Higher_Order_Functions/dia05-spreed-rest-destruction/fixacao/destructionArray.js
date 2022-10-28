const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [comprimento, funcao] = saudacoes;
// funcao(comprimento);

//-------------------------------------------------

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const newInformations = [comida, animal, bebida];
const [newAnimal, newBebida, newComida] = newInformations
//console.log(newAnimal);
//console.log(newBebida);
//console.log(newComida);

//-----------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [impar1, impar3, impar5, par6, par8, par10, par12] = numerosPares
numerosPares = [par6, par8, par10, par12];

console.log(numerosPares); // [6, 8, 10, 12];