const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
  
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const informationsPesowrd = {...user, ...jobInfos};
const {name: nome, age, nationality, profession, squad, squadInitials} = informationsPesowrd;
console.log(`Olá meu nome é ${nome} tenho ${age} sou ${nationality}
trabalho como ${profession} na ${squad} no setor de ${squadInitials}`);
console.log(informationsPesowrd);
  