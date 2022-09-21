const angle1 = 30;
const angle2 = 40;
const angle3 = 120;

if(angle1 < 0 || angle2 < 0 || angle3 < 0){
    console.log("valor inválido. O angúlo precisa ser maior que 0")
} else if (angle1 + angle2 + angle3 == 180){
    console.log("TRUE")
} else {
    console.log("FALSE")
}