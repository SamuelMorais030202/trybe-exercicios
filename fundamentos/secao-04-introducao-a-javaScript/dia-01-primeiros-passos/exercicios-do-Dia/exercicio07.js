const note = 57;

if(note < 0 || note > 100){
    console.log("A nota deve está entre 0 e 100")
} else if (note >= 90){
    console.log("A")
} else if (note >= 80 && note < 90){
    console.log("B")
} else if (note >= 70 && note < 80){
    console.log("C")
} else if (note >= 60 && note < 70){
    console.log("D")
} else if (note >= 50 && note < 60){
    console.log("E")
} else if (note < 50){
    console.log("F")
}