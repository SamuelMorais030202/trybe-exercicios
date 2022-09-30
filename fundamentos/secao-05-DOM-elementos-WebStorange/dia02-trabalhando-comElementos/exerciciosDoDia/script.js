let corpo = document.body

// criando um título para a página
let titulo = document.createElement('h1');
titulo.innerText = "Exercícios";
titulo.className = 'title';

corpo.appendChild(titulo);

// Adicionando um corpo para a página
let main = document.createElement('main');
main.className = 'main-content';
main.style.background = 'green'
corpo.appendChild(main);


// Adicionando uma seção na main
let secao = document.createElement('section');
secao.className = 'center-content';

main.appendChild(secao);

// Adicionando um parágrafo na seção
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Vamos praticar e trabalhar com seleção, criação e remoção de elementos';

secao.appendChild(paragrafo);

// Adicionando mais uma seção ma main
let secao2 = document.createElement('section');
secao2.className = 'left-content';

corpo.appendChild(secao2);
corpo.removeChild(secao2)

// Adicionando outra seção na main
let secao3 = document.createElement('section');
secao3.className = 'right-content';

corpo.appendChild(secao3);

// adicionando uma foto na left-content
let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';

secao2.appendChild(imagem)

// adicionando uma lista não ordenada na seção 3
let listaNaoOrdenada = document.createElement('ul');

let elementosLista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete',
'oito', 'nove', 'dez'];

for (let index = 0; index < elementosLista.length; index += 1) {
    let itensLista = document.createElement('li')
    itensLista.innerText = elementosLista[index]
    listaNaoOrdenada.appendChild(itensLista);
}
listaNaoOrdenada.lastElementChild.remove()
listaNaoOrdenada.lastElementChild.remove()

secao3.appendChild(listaNaoOrdenada);

// adicionando três h3 no main
let primeiroSubTitulo = document.createElement('h3');
let segundoSubTitulo = document.createElement('h3');
let terceiroSubTitulo = document.createElement('h3');

primeiroSubTitulo.innerText = 'Primeiro sub título';
segundoSubTitulo.innerText = 'Segundo sub título';
terceiroSubTitulo.innerText = 'Terceiro sub título';

primeiroSubTitulo.className = 'description';
segundoSubTitulo.className = 'description';
terceiroSubTitulo.className = 'description'

corpo.appendChild(primeiroSubTitulo);
corpo.appendChild(segundoSubTitulo);
corpo.appendChild(terceiroSubTitulo);