// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Mamão', 'Goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Pera', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));