const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => {
   return name[0] === letter;
  });
}

console.log(verifyFirstLetter('J', listNames)); // true 
console.log(verifyFirstLetter('x', listNames)); // false