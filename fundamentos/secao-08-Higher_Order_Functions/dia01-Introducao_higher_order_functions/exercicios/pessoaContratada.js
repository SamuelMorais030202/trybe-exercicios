const newEmployees = () => {
  const employees = {
    id1: person('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: person('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: person('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const person = (name) => {
  const email = `${name.replace(/\s/g, '').toLowerCase()}pessoa@trybe.com`
  return {
    Nome: name,
    Email: email,
  }
}

console.log(newEmployees())