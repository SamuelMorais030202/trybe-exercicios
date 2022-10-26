const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};
  
const verifyGrades = (studentGrades) => {
   let listGrade = Object.values(studentGrades)
   return listGrade.every((grade) => {
     return grade === 'Aprovado'
   });
}
  
console.log(verifyGrades(grades));