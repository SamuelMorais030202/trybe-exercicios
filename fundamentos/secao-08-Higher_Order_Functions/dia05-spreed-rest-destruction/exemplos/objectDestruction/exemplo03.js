const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

  const {workDays, weekend} = daysOfWeek;

  const newArray = [...workDays, ...weekend];
  console.log(newArray);