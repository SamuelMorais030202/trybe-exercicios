// Essa função gera um número aleatório entre 1 e 10
const getRandomNumber = () => Math.round(Math.random() * 10);

// Promisse que será sempre resolvida.
const getPromiseResolve = (timer) => 
  new Promise ((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = getRandomNumber();
        console.log(`Promisse resolvida em ${timer / 1000} segundos(s)`);
        resolve(
            `O número ${randomNumber} foi gerado em 
            ${timer / 1000} segundos(s)`
        );
    }, timer);
  });


// Promise que sera sempre rejeitada
const getPromiseReject = (timer) => 
  new Promise ((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = getRandomNumber();
        console.log(`Promisse rejeitada em ${timer / 1000} segundos(s)`);
        reject(
            `O numero ${randomNumber} foi 
            rejeitado em 
            ${timer / 1000} segundos(s)`
        );
    }, timer);
  });

Promise.all([
    getPromiseResolve(1000),
    getPromiseReject(5000), // uma promisse será reject ele retornara undefined
    getPromiseResolve(2000),
])
.then((result) => console.log(result))
.catch((error) => console.log(error.message));