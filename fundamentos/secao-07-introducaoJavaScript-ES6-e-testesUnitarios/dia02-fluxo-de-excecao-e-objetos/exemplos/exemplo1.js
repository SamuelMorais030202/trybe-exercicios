//----------------- throw --------------------------------
const suma = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores precissam ser numéricos');
    }

    return value1 + value2;
};

//console.log(suma(2, 3))
//console.log(suma(2, '3'))
// tratamos o erro, mas ainda podemos melhorar a execução
// do código.

//---------------- try/catch------------------------------
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
      // a linha 18 é o erro que sera lançado
    }
  };
  
  const sum = (value1, value2) => {
    try { // vai tentar executar o código
      verifyIsNumber(value1, value2); // verificar os números
      return value1 + value2; // caso não tenha dado erro na linha de cima
    } catch (error) { // caso tenha dado erro na linha 24
    // o catch ira capturar esse erro(parâmetro)
        return error.message; // retornara o erro como mensagem
    }
  };
  
  console.log(sum(2, '3'));
