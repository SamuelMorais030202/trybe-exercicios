const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const paciente = [89, 1.91];

// console.log(imc(...paciente));

//----------------------------------------------------------------
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));