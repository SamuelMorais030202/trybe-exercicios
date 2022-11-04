const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {a: nome, b: turma, c: materia} = student;
console.log(`A aluna ${nome}, estuda na turma ${turma} e gosta de ${materia}`);