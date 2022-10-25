const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const student_grade_corrections = (feedback, studentAnsewers, correction) => {
  console.log(`Gabarito: ${feedback}`);
  console.log(`Respostas do aluno: ${studentAnsewers}`);
  const note = correction(feedback, studentAnsewers);
  return `A nota final do aluno foi de ${note} pontos`
};

const correction = (feedback, studentAnsewers) => {
  let noteStudent = 0;
  for (let index = 0; index < feedback.length; index += 1) {
    if (feedback[index] === studentAnsewers[index]) {
      noteStudent += 1;
    } else if (studentAnsewers[index] === 'N.A') {
      noteStudent += 0;
    } else {
      noteStudent -= 0.5;
    }
  }
  return noteStudent;
}

console.log(student_grade_corrections(RIGHT_ANSWERS, STUDENT_ANSWERS, correction))