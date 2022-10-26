const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
  
  // Adicione se código aqui
  people.sort((a, b) => {
    return a.age - b.age; // a e b serão objetos do array
    // a comparação será através da key age
  });
  console.log('Crescente:');
  console.log(people);

  people.sort((a, b) => b.age - a.age);
  console.log('Decresente:');
  console.log(people);