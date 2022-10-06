// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// Desafivando o comportamento padrão do link
HREF_LINK.addEventListener('click', function desativandoLink(event) {
    event.preventDefault(); // se usarmos o .target não iremos conseguir realizar nosso objetivo
});

// Desativando o comportamento padrão do input-checkbox
INPUT_CHECKBOX.addEventListener('click', function(event) {
    event.preventDefault(); // o .target impede de conseguirmos realizar o objetivo
});

// Mudando o comportamento padrão do input-text
INPUT_TEXT.addEventListener('click', function (event) {
    
    if (event.key !== 'A') {
        event.preventDefault();
    }
    console.log(exesao)
})