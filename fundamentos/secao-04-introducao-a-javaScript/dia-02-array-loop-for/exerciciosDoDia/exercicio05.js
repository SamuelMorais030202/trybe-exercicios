let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = 10000000000000;

for(let contador in numbers){
    if(numbers[contador] < menorNumero){
        menorNumero = numbers[contador]
    }
}

console.log(menorNumero)