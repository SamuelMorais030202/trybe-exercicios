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

  const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;
  console.log(name);
  console.log(age);
  console.log(planetName);
  console.log(jedi);