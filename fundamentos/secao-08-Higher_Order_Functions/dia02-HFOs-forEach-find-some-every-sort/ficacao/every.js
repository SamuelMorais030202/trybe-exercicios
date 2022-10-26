const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const checkingAge = (minAge, persons) => {
   return persons.every((person) => {
      return person.age >= minAge;
   });
}

console.log(checkingAge(18, people));