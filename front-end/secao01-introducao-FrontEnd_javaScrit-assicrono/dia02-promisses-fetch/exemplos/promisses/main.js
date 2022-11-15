const newNumberRandom = () => Math.round(Math.random() * 10);

// promise resolvida
const resolvedPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(()=> {
        const randonNumber = newNumberRandom();
        resolve(randonNumber);
    }, 1000)
  });
resolvedPromise()
.then((response) => {
  console.log(`O número gerado é ${response}`);
})

// promisse rejeitada
const rejectPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = newNumberRandom();
        reject(new Error(`O número ${randomNumber} é inválido`))
    }, 1000)
  })
rejectPromise()
.then((response) => {
  console.log(`rejected: O número gerado foi ${response}`);
})
.catch((error) => {
  console.log(error);
})