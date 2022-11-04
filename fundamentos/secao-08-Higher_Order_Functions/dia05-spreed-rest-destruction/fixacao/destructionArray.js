const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [primeiraPosicao, segundaPosicao] = saudacoes;
// segundaPosicao(primeiraPosicao);

//------------------------------------------------------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const newArray = [comida, animal, bebida];
// console.log(newArray)
const [newAnimal, newBebida, newComida] = newArray;
//console.log(newAnimal, newBebida, newComida);


//----------------------------------------------------------
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [primeiro, segundo, terceiro, par, par2, par3, par4] = numerosPares;
numerosPares = [par, par2, par3, par4];
console.log(numerosPares);