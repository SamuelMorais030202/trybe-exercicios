const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  /*
  for (let key in coolestTvShow) {
    console.log(key)
  }
  */

  const keyObject = (Object.keys(coolestTvShow));
  // console.log(keyObject)

  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  listandoAbilidadesEstudantes = (student) => {
    let arrayKeyObject = Object.keys(student);
    for (let index in arrayKeyObject) {
        console.log(`${arrayKeyObject[index]}, nível: ${student[arrayKeyObject[index]]}`)
    }
  }
  listandoAbilidadesEstudantes(student1);
  listandoAbilidadesEstudantes(student2)