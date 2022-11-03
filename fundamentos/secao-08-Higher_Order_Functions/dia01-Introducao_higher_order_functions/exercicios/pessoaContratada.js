const newEmployees = () => {
  const employees = {
    id1: newPesowrd('Pedro Guerra'),
    id2: newPesowrd('Luiza Drumond'),
    id3: newPesowrd('Carla Paiva'),
  }
  return employees
}

const newPesowrd = (fullName) => {
  return {
    nome: fullName,
    email: `${fullName.replace(/\s/g, '').toLowerCase()}pessoa@trybe.com`
  }
}
console.log(newEmployees());