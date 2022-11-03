const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctionExam = (feedbeck, studentAsewrs, correction) => {
  console.log(`O gabarito é ${feedbeck}`);
  console.log(`As respostas do estudante são ${studentAsewrs}`);
  const res = correction(feedbeck, studentAsewrs);
  return `O estudante tirou ${res} pontos`;
}

const correction = (feedback, student_asewrs) => {
  let studentGrade = 0;
  for (let index = 0; index < feedback.length; index += 1) {
    if (feedback[index] === student_asewrs[index]) {
      studentGrade += 1
    } else if (student_asewrs[index] === 'N.A') {
      studentGrade += 0
    } else {
      studentGrade -= 0.5;
    }
  }
  return studentGrade;
}

console.log(correctionExam(RIGHT_ANSWERS, STUDENT_ANSWERS, correction))























/*
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
*/
