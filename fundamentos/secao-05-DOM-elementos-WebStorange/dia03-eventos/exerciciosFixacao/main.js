const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

window.onload = function () {

  // - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
  //  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

  function adicionandoClass (event) {
    let classe = document.querySelector('.tech');
    classe.classList.remove('tech');
    event.target.classList.add('tech');
  }

  firstLi.addEventListener('click', adicionandoClass);
  secondLi.addEventListener('click', adicionandoClass);
  thirdLi.addEventListener('click', adicionandoClass);

  // - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
  // com a classe 'tech';
  
  input.addEventListener('input', function(event) {
    const elemento = document.querySelector('.tech')
    elemento.innerHTML = event.target.value
  })

  // - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
  // - redirecione para alguma página;
  // - Que tal redirecionar para seu portfólio?

  myWebpage.addEventListener('dblclick', function () {
    window.location.replace('https://github.com/SamuelMorais030202')
  })

  myWebpage.addEventListener('mouseover', function (event) {
    event.target.style.color = 'orange';
  })

  myWebpage.addEventListener('mouseleave', function (event) {
    event.target.style.color = 'white'
  })
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.