fetch("https://api.goprogram.ai/inspiration", {
    method: 'POST', // post ou get
    headers: '', //informações adicionais
    body: '',//corpo da requisição
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error.message));