let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordenando a lista de forma crescente
numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    if(a == b) return 0;
})
console.log(numbers)

console.log("*")

// Ordenando a lista de forma decrescente
numbers.sort(function(a,b){
    if(a > b) return -1;
    if(a < b) return 1;
    if(a == b) return 0;
})
console.log(numbers)

console.log("*")

//Multiplicando array

let numbers2 = []

for (let index = 0; index < numbers.length; index += 1){
    for(let segundoIndex = 1; segundoIndex > index; segundoIndex += 1){
        numbers2.push(numbers[segundoIndex] * numbers[index])
    }
}
console.log(numbers2)