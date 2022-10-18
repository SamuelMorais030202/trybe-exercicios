// -------------calculando fatorial------------------
const factorial = (number) => {
    let factorialNumber = number
    let result = factorialNumber;
    for (let index = 1; index < factorialNumber; index += 1) {
      result *= index;
    }
    
    console.log(`O fatorial de ${factorialNumber} é ${result}`)
}
factorial(4)