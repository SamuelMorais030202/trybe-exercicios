const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  function formatedBookNames() {
    return books.map((book) => {
      return `${book.name} - ${book.genre} - ${book.author.name}`;
    })
  }
  // console.log(formatedBookNames());

  // Construa um array de objetos a partir do array de livros. Cada objeto deve
  // conter uma propriedade author, com o nome da pessoa autora do livro, e uma
  // propriedade age, com a idade dessa pessoa quando o livro foi lançado.
  function nameAndAge() {
    const newBooks = books.map((book) => {
      return {
        autor: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    })
    return newBooks.sort((a, b) => a.age - b.age);
  }
  //console.log(nameAndAge());

 // Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 function fantasyOrScienceFiction() {
   return books.filter((book) => book.genre === 'Ficção Científica' 
    || book.genre === 'Fantasia');
 }
 //console.log(fantasyOrScienceFiction());


// Crie um array formado pelos livros com mais de 
// 60 anos desde sua publicação. Esse array deve ser 
// ordenado do livro mais velho ao mais novo.
function oldBooksOrdered() {
  const listBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  return listBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered());



// Crie um array em ordem alfabética apenas com
// os nomes de todas as pessoas autoras de ficção
// científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  const listAuthors = books.filter((book) => book.genre === 'Ficção Científica' 
    || book.genre === 'Fantasia').map((autor) => autor.author.name);
  return listAuthors.sort();
}
//console.log(fantasyOrScienceFictionAuthors());


// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  return books.filter((book) => 2022 - book.releaseYear > 60)
    .map((element) => element.name);
}
//console.log(oldBooks());



// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName() {
  return books.find((book) => book.author.name[1, 4, 7] === '.').name;
}
console.log(authorWith3DotsOnName());