fetch("https://dummyjson.com/users")
.then((result) => result.json())
.then((data) => fillUsersSelect(data.users))

const fillUsersSelect = (informationsPeoples) => {
  console.log(informationsPeoples);
}