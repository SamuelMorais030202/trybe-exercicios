const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};
let newKey = 'lastName';
const lastName = 'Faria';
customer[newKey] = lastName
// console.log(customer)
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`
customer[newKey] = fullName;
console.log(customer)

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    jog: 'Teacher',
}
console.log(customer1);
customer1.lastName = 'Faria' // criando e adicionando nova chave
console.log(customer1)

const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
}
console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);