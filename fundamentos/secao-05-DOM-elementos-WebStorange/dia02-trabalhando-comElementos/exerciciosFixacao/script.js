// primeiro exercício
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// segundo exercício
let elementoPai = elementoOndeVoceEsta.parentElement;
elementoPai.style.color = "blue";

// terceiro exercício
let primeiroFilhoDoFilho = elementoOndeVoceEsta.children[0];
primeiroFilhoDoFilho.innerHTML = "Boa noite";

// quarto exercício
let primeiroFilho = elementoPai.children[0];
primeiroFilho.style.color = 'black';

// quinto exercício
let voltandoPrimeiroFilho = elementoOndeVoceEsta.previousElementSibling;
voltandoPrimeiroFilho.innerHTML = 'sou foda';

// sexto exercício
let atencao = elementoOndeVoceEsta.nextElementSibling;
atencao.innerHTML = 'Oque não mata fortalece';

// setimo exercício
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling.nextElementSibling
terceiroFilho.innerHTML = 'vamo na fé'

// oitavo exercício
let penultimoFilho = elementoPai.children[2]
penultimoFilho.style.color = 'black'