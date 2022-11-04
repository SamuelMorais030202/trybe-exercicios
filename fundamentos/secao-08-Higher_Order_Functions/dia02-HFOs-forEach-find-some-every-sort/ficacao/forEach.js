const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
const showEmailList = (email) => {
  console.log(`O email ${email} está cadastrado no nosso banco de dados!`);
}

emailListInData.forEach(showEmailList);