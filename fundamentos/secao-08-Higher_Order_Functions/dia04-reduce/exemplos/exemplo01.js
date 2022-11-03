const numbers = [1, 32, 44, 2, 3];
const iteracoesDoReduce = numbers.reduce((acc, curr) => {
  // console.log(`Por enquanto a soma é ${acc}`);
  // console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
      // Iteração 1: valor do acc é 1 e o de curr é 32;
 // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
     // Iteração 2: valor do acc é 33 e o de curr é 44;
// Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
    // Iteração 3: valor do acc é 77 e o de curr é 2;
    // Iteração 4: valor do acc é 79 e o de curr é 3;
    // Valor final de `acc`é 82 e `curr` para no 3.
  return acc +  curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
}, 0);
 // console.log(`O resultado final é ${iteracoesDoReduce}`);
 // por fim, esse console.log imprime o retorno final da nossa função.



//----------------------------------------------------------------------
const numbers2 = [1, 32, 44, 2, 3];

const sum = (acc, curr) => {
  return acc + curr;
}
// console.log(numbers2.reduce(sum, 30))

//-----------------podemos usar o reduce em funções-------------------------

const number3 = [1, 32, 44, 2, 3];

const somaNumber = (acc, curr) => acc + curr;
const soma = number3.reduce(somaNumber, 30);
// console.log(soma);


//--------------buscando o maior número de um array com reduce-------------

const numbers4 = [50, 85, -30, 3, 15];

const bigNumber = numbers4.reduce((acc, curr) => 
  (acc < curr) ? curr : acc);

// console.log(bigNumber);


//------------------some os números pares do array-----------------------

const numbers5 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPar = numbers5.filter((number) => number 
  % 2 === 0).reduce((acc, curr) => acc + curr);

const sumImpar = numbers5.filter((number) => number % 2 !==
  0).reduce((acc, curr) => acc + curr);

// console.log(sumPar);
// console.log(sumImpar);


//-----------------------notas alunos------------------------------------

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

const reportStudents = estudantes.map((estudante) => {
  return {
    name: estudante.nome,
    nota: estudante.materias.reduce((acc, curr) => 
      (acc.nota < curr.nota) ? curr : acc).name,
  }
});
console.log(reportStudents);
