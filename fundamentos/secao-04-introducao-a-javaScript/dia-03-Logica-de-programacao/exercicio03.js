let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';
let menorPalavra = '';

for(let index = 0; index < array.length; index += 1){
    if(maiorPalavra.length < array[index].length){
        maiorPalavra = array[index]
    }
}

console.log(maiorPalavra)

menorPalavra = maiorPalavra

for(let index = 0; index < array.length; array += 1){
    if(menorPalavra > array[index]){
        menorPalavra = array[index]
    }
}
console.log("*")