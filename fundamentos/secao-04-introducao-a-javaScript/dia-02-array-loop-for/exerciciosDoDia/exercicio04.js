let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalImpares = 0;

for(let contador in numbers){
    if(numbers[contador] % 2 == 1){
        totalImpares += 1
    }
}
if(totalImpares == 0){
    console.log("Nenhum valor impar encontrado")
} else {
    console.log(totalImpares)
}