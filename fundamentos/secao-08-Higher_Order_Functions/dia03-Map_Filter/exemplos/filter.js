const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]


//----------------------------------------------------------------------------

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
const verifyAgeDrive = (peoples) => {
  return peoples.filter((pessoa) => pessoa.age > 18);
}
// console.log(verifyAgeDrive(objPeople));

//-----------------------------------------------------------------------------

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudent = (student, listStudents) => {
  return listStudents.filter((studentInList) => studentInList !== student);
}
//console.log(removeStudent('Maria', arrayMyStudents))