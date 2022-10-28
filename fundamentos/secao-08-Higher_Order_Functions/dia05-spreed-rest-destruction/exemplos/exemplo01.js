const numbers = [1, 2, 3];

const newArray = [...numbers];
newArray.push(4);
newArray.push(5);
newArray.push(6);
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]