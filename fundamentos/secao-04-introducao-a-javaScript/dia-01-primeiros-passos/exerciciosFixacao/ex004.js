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


let weekDay = "sábado"

if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe > D.")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}

let statusPerson = "aprovado"

switch (statusPerson) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado(a)")
        break
    case "lista":
        console.log('Você está na nossa lista de espera')
        break
    case "reprovado":
        console.log("Você foi reprovado(a)")
        break
    default:
        console.log("Informação incorreta")
}