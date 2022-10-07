const SUBMIT_BUTTON = document.querySelector('#submit');
const NAME_INPUT = document.querySelector('#name');
const EMAIL_INPUT = document.querySelector('#e-mail');
const TEXT_FORM = document.querySelector('#text-area');

SUBMIT_BUTTON.addEventListener('click', function(event) {
    event.preventDefault();

    if(NAME_INPUT.value.length < 10 || NAME_INPUT.value.length > 40) {
        alert('Dados Inválidos!');
    }

    if(EMAIL_INPUT.value.length < 10 || EMAIL_INPUT.value.length > 50) {
        alert('Dados Inválidos!');
    }

    if(TEXT_FORM.value.length < 50 || TEXT_FORM.value.length > 500) {
        alert('Dados Inválidos!')
    } else {
        alert('Dados enviados com sucesso!')
    }
})