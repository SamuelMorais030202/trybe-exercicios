const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};
  
const verifyGrades = (studentsGrade) => {
  return Object.values(studentsGrade).every((materia) => materia === 'Aprovado');
}

console.log(verifyGrades(grades));