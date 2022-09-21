const notePerson = 59

if(notePerson >= 80){
    console.log("Parabéns, você foi aprovado(a)")
} else if(notePerson < 80 && notePerson >= 60){
    console.log("Você está na lista de espera")
} else if (notePerson < 60){
    console.log("Você foi reprovado(a)")
}