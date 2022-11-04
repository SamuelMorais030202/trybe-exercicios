// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  const {name, age, description:{specieName}, homeWorld: {name:nome}} = character;
  console.log(name);
  console.log(age);
  console.log(specieName);
  console.log(nome);