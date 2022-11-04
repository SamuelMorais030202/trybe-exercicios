const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

const verifyGrades = () => {
  students.forEach((student, index) => {
    if (student.grade >= 60) students[index].approved = 'Aprovado';
    if (student.grade < 60) students[index].approved = 'Recuperação';
  })
}

verifyGrades();
// console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

  //---------------------------------------------------------
  const numbers1 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
  const numberDiviseFive = numbers1.find((number) => number % 5 === 0);
  // console.log(numberDiviseFive);

  //---------------------------------------------------------
// tabuada
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  // console.log(`2 x ${number} = ${number * 2}`);
});

//------------------------------------------------------------
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
}

const convertToLowerCase = (name, index) => {
  names[index] = name.toLowerCase();
} 

// names.forEach(convertToUpperCase);
names.forEach(convertToLowerCase)
console.log(names);