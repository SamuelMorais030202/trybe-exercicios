// moment
const moment = require('moment');
let minhaDataNascimento = moment('03022002', 'DDMMYYYY');
let minhaIdade = minhaDataNascimento.fromNow();
console.log(minhaIdade)


// data e hora com moment
let data_e_hora = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(data_e_hora)

// cheet.js
/*
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    alert('Código secreto');
});
*/