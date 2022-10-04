window.onload  = () => {

    //  adicionando uma cor de fundo, baseando no evento change que acontece no select
    const select = document.querySelector('#select');
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.background = selected.value;

        localStorage.setItem('background', selected.value)
    });

    // mudando a cor da letra baseando no evento de change que acontece no select
    const corDaLetra = document.querySelector('#corDaLetra');
    corDaLetra.addEventListener('change', () => {
        let corSelecionada = corDaLetra.selectedOptions[0];
        document.body.style.color = corSelecionada.value;

        localStorage.setItem('corDaLetra', corSelecionada.value)
    });

    // mudando o tamanho da fonte baseando no evento change que acontece no input
    const tamanhoDaLetra = document.querySelector('#font-size');
    tamanhoDaLetra.addEventListener('change', function () {
        let tamanhoLetra = tamanhoDaLetra.value;
        document.body.style.fontSize = tamanhoLetra + 'px';

        localStorage.setItem('tamanhoDaLetra', tamanhoLetra + 'px')
    });

    // mudando o espaço entre as linhas
    const espacoLinha = document.querySelector('#espaco-linha');
    espacoLinha.addEventListener('change', function () {
        let espaco = espacoLinha.value;
        document.body.style.lineHeight = espaco + 'px'

        localStorage.setItem('espacoLinha', espaco + 'px');
    });


    // Salvando as alterações em localStorage para que não se percão ao recarregar a página
    let backgroundSalvo = localStorage.getItem('background')
    document.body.style.background = backgroundSalvo;

    let corDaLetraSalva = localStorage.getItem('corDaLetra');
    document.body.style.color = corDaLetraSalva;

    let tamanhoDaLetraSalva = localStorage.getItem('tamanhoDaLetra');
    document.body.style.fontSize = tamanhoDaLetraSalva;

    let espacoLinhaSalvo = localStorage.getItem('espacoLinha')
    document.body.style.lineHeight = espacoLinhaSalvo;
}