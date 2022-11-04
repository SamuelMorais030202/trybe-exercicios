const numbersBet = 4;

const resultNumbersBet = (numbers) => {
  const resultSorted = Math.ceil(Math.random() * 5);
  return checkingNumber(resultSorted, numbers);
}

const checkingNumber = (rsult, numberBet) => {
  console.log(`Seu número ${numberBet}, número sorteado ${rsult}`)
  return ((rsult === numberBet) ? 'Parabéns você ganhou'
    : 'Tente novamente');
}

console.log(resultNumbersBet(numbersBet));
