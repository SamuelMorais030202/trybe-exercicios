const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

const {workDays, weekend} = daysOfWeek;
const newList = [...workDays, ...weekend];
console.log(newList);