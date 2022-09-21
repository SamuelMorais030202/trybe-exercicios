const num1 = 46;
const num2 = 27;
const num3 = 18;
let largerNumber = null;

if(num1 > num2 && num1 > num3){
    largerNumber = num1
} else if (num2 > num1 && num2 > num3){
    largerNumber = num2
} else if (num3 > num1 && num3 > num2){
    largerNumber = num3
}

console.log(`O maior número é ${largerNumber}`)