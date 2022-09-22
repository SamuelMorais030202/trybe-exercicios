const wage = 9000.00;
let wageLiquid = 0;
let wageBase = 0
let tax = 0

if(wage <= 1556.94) {
    wageBase = (wage * 0.92).toFixed(2)
} else if(wage > 1556.94 && wage <= 2594.92){
    wageBase = (wage * 0.91).toFixed(2)
} else if(wage > 2594.92 <= 5189.82){
    wageBase = (wage * 0.89).toFixed(2)
} else if(wage > 5189.82){
    wageBase = (wage - 570.88).toFixed(2)
}
console.log(wageBase)

if(wageBase <= 1903.98){
    wageLiquid = wageBase
} else if(wageBase >= 1903.99 && wageBase <= 2826.65){
    tax = (wageBase * 0.075).toFixed(2) - 142.80
    wageLiquid = wageBase - tax
} else if(wageBase >= 2826.66 && wageBase <= 3751.05){
    tax = (wageBase * 0.15).toFixed(2) - 354.80
    wageLiquid = wageBase - tax
} else if(wageBase >= 3751.06 && wageBase <= 4664.68){
    tax = (wageBase * 0.225).toFixed(2) - 636.13
    wageLiquid = wageBase - tax
} else if(wageBase > 4664.68){
    tax = (wageBase * 0.275).toFixed(2) - 869.36
    wageLiquid = wageBase - tax
}
console.log(wageLiquid.toFixed(2))
