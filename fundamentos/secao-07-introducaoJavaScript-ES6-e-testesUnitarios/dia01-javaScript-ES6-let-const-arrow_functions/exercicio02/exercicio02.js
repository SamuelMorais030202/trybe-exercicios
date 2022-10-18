// -----------------Mostrando a maior palavra de uma frase--------------------
const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu';

const bigWord = (wordPhrase) => {
    const splits = wordPhrase.split(" ");
    let result = 'a';
    for (let index = 0; index < splits.length; index += 1) {
        if (result.length < splits[index].length) {
            result = splits[index]
        }
    }
    return result;
}
console.log(bigWord(longestWord))