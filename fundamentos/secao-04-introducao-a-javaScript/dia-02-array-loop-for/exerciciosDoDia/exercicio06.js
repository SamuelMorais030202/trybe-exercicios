let numbers = []

for(let contador = 1; contador <= 25; contador += 1){
    numbers.push(contador)
}

console.log(numbers)
console.log("*")

for(let contador2 in numbers){
    console.log(numbers[contador2] / 2)
}