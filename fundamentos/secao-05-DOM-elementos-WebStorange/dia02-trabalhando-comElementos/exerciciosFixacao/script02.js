let pai = document.querySelector('#pai');

// primeiro exercício
let section = document.createElement('section');
section.innerText = 'Bom dia';
section.id = 'irmaoDoElementoOndeVoceEsta';
pai.appendChild(section);

// segundo exercício
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDoElementoOndeVoceEsta = document.createElement('h1');
filhoDoElementoOndeVoceEsta.innerText = 'Xablau';
filhoDoElementoOndeVoceEsta.style.color = 'red';
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);

// terceiro exercício
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let subtitulo = document.createElement('h4');
subtitulo.innerText = 'Olá mundo';
subtitulo.style.color = 'blue';
primeiroFilhoDoFilho.appendChild(subtitulo);

// quarto exercício
let terceiroFilho = subtitulo.parentElement.parentElement.nextElementSibling;
terceiroFilho.innerHTML = 'Bora praticar';
