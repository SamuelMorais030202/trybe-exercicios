// exercício 01
function MudandoParagrafo () {
   let paragrafo = document.querySelectorAll('p');
   paragrafo[1].innerText = 'Daqui a dois anos eu me imagino um desenvolvedor full-stack bem sucedido';
}
MudandoParagrafo()

// exercício 02
function trocandoCorMain () {
    let caixa = document.getElementsByTagName('main');
    caixa[0].style.background = 'rgb(76, 164, 109)';
}
trocandoCorMain()

// exercíco 03
function trocandoCorSection () {
    let secao = document.getElementsByTagName('section');
    secao[0].style.background = 'white'
}
trocandoCorSection()

// exercício 04
function corecaoTitulo () {
    let title = document.querySelector('h1');
    title.innerText = 'Exercício - JavaEscript';
}
corecaoTitulo()

// exercício 05
function modificandoTexto () {
    let texto = document.querySelector('p');
    texto.innerText = 'TEXTO PADRÃO DO NOSSO SITE';
}
modificandoTexto();

// exercício 06
function exibindoConsole () {
    console.log(window.document.getElementsByTagName('p'));
}
exibindoConsole()
