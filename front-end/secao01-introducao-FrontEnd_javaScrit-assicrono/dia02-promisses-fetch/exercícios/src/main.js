fetch("https://dummyjson.com/users")
.then((result) => result.json())
.then((data) => fillUsersSelect(data.users))
.catch((error => console.log('Erro ao fazer a requisição.', error.message )))

const fillUsersSelect = (informationsPeoples) => {
  console.log(informationsPeoples);
}