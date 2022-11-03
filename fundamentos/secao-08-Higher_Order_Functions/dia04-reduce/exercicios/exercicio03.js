// Dado o array de nomes, utilize o reduce para retornar
// a quantidade de vezes em que aparece a letra a, maiúscula
// ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  const letter = names.map((name) => {
    let soma = 0
    for (let index = 0; index < name.length; index += 1) {
      if(name[index] === 'A' || name[index] === 'a') soma += 1
    }
    return soma;
  });
  return letter.reduce((acc, curr) => acc + curr);
}
console.log(containsA());