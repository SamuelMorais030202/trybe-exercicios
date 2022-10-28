const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => {
  const studenstNots = students.map((student, index) => {
    const obj = {};
    obj.name = student;
    obj.average = grades[index].reduce((acc, curr) => acc + curr) / grades[index].length;
    return obj;
  });
  return studenstNots;
}
console.log(studentAverage(students, grades));