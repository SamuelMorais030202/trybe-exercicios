const currentHour = 7
let message = ""

if(currentHour >= 22){
    message = "Não deveriamos comer nada"
} else if(currentHour >= 18 && currentHour < 22){
    message = "Vamos jantar"
} else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um café da tarde"
} else if(currentHour >= 11 && currentHour < 14){
    message = "Vamos almoçar"
} else if(currentHour >= 4 && currentHour < 11){
    message = "Hmmmm cheiro de café recém-passado"
}

console.log(message)