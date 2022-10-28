const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

const {a: nome, b: turma, c: materia} = student;
console.log(`O nome do estudante é ${nome}`);
console.log(`A turma de ${nome} é a ${turma}, sua matéria favorita é ${materia}`);