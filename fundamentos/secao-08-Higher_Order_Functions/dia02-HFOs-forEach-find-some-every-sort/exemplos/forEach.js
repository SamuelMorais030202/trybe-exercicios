const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  //console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

  //---------------------------------------------------------
  const array = [1, 4, 5, 3, 8];
  const newArray = [];
  array.forEach((index) => {
    if(array[index] % 2 === 0) newArray.push(array[index])
  })
  //console.log(newArray)

  //---------------------------------------------------------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
 // console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
numbers.forEach((number) => {
  // console.log(`${number} * 5 = ${number * 5}`);
});

//------------------------------------------------------------
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);

names.forEach((nome, posicao) => {
  names[posicao] = nome.toLowerCase();
})
console.log(names)