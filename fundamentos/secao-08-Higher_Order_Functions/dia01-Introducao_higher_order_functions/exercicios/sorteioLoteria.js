const numbersBet = [23, 43, 28, 10, 7];

// Compara os números sorteados com os números marcados
const checkingNumbers = (numberLottery, numbersBet) => {
    let result = 0;
    for(let index in numberLottery) {
      for(let index2 in numbersBet) {
        if (numberLottery[index] === numbersBet[index2]) {
          result += 1;
        }
      }
    }
    return result;
}

// analisa se o resultado é igual ou menor que 5
const analisandoResult = (resultado) => {
   if(resultado === 5) return "Parabéns você ganhou";
   return "Tente novamente";
}

// Função principal, gera os números aleatórios e chama as demais funções
const numbersLottery = (numbersBet) => {
  const numberLottery = [];
  for (let index = 0; index < 5; index += 1) {
    numberLottery.push(Math.floor(Math.random() * 60))
  }
  console.log(numbersBet);
  console.log(numberLottery);
  let result = checkingNumbers(numberLottery, numbersBet);
  console.log(`Você acertou ${result} números`);
  let analise = analisandoResult(result)
  return analise;
}

console.log(numbersLottery(numbersBet));
