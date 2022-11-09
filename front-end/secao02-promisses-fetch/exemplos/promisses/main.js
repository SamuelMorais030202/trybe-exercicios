const newNumberRandom = () => Math.round(Math.random() * 10);

// promise resolvida
const resolvedPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(()=> {
        const randonNumber = newNumberRandom();
        console.log(randonNumber);
        resolve(randonNumber);
    }, 1000)
  });
resolvedPromise();

// promisse rejeitada
const rejectPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = newNumberRandom();
        reject(new Error(`O número ${randomNumber} é inválido`))
    }, 1000)
  })
// rejectPromise();