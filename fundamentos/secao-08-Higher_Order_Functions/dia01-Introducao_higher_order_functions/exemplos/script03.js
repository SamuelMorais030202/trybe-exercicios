/*
const waking_up = () => 'Acordando!!';
const coffeTime = () => 'Hora de tomar café!!';
const toSleep = () => 'Partiu dormir!!'
const day = new Date;
let hrs = day.getHours();
let minutes = day.getMinutes();

const doingThings = (walking, coffe, sleep, hrs) => {
  if(hrs <= 7) console.log(walking);
  if(hrs <= 9) console.log(coffe);
  if(hrs >= 22) console.log(sleep);
}

doingThings(waking_up(), coffeTime(), toSleep, hrs)
*/

const acordando = () => 'Acordando!!';
const tomandoCafe = () => 'Bora tomar café';
const dormir = () => 'Partiu dormir';

const doingThings = (argument) => {
  console.log(argument())
}
doingThings(acordando);