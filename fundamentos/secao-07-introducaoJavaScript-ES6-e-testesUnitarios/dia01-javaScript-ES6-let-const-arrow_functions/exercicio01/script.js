const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);


  // --------------------------------------------------------------------------

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {

    array.sort((a, b) => {
        if(a < b) return -1
        if(a > b) return 1
        return 0
    });
    
    return array
  }

  console.log(`Array antigo: ${oddsAndEvens} agora o array em ordem: ${sortOddsAndEvens(oddsAndEvens)}`);//😉