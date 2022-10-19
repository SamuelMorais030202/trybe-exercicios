const person = {
  name: 'Samuel',
  lastName: 'Garcia',
  age: 20
}

const info = {
  city: 'Brasilândia',
  job: 'student',
  age: 21 // irá sobescrever a idade em person
}

const family = {
  brother: ['Marcelo', 'Pedro', 'Adélio'],
  mother: 'Olívia',
  dad: 'Adélio',
}

Object.assign(person, info, family)
// console.log(person)

//-------------------------------------
const person1 = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person1, lastName);
  /*
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }
  */

//-------------------------------------------
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

//--------------------------------------------------------
const newPerson = {
  name: 'Fernanda',
}

const lastNameNewPerson = {
  lastName: 'Silva',
}

const fullName = Object.assign({}, newPerson, lastNameNewPerson);
console.log(newPerson);
console.log(fullName);
