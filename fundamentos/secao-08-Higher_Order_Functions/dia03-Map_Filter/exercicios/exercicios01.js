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
  const formatedBookNames = (books) => {
    const informationBooks = books.map((book) => {
      return [
        `Name: ${book.name}`,
        `Gênero: ${book.genre}`,
        `Autor: ${book.author.name}`
      ];
    });
    return informationBooks;
  }
  // console.log(formatedBookNames(books))


  // Construa um array de objetos a partir do array de livros. Cada objeto deve
  // conter uma propriedade author, com o nome da pessoa autora do livro, e uma
  // propriedade age, com a idade dessa pessoa quando o livro foi lançado.
  const nameAndAge = (books) => {
    const informationAuthor = books.map((book) => {
       return {
         ['Autor']: book.author.name,
         ['idade']: book.releaseYear - book.author.birthYear
       }
    });
    return informationAuthor.sort((a, b) => a.idade - b.idade);
  }
 // console.log(nameAndAge(books))


 // Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = (books, genere1, genere2) => {
  const listBooksFiction = books.filter((book) => {
    return book.genre === genere1 || book.genre === genere2;
  });
  return listBooksFiction;
}
// console.log(fantasyOrScienceFiction(books, 'Ficção Científica', 'Fantasia'));



// Crie um array formado pelos livros com mais de 
// 60 anos desde sua publicação. Esse array deve ser 
// ordenado do livro mais velho ao mais novo.
const oldBooksOrdered = (books, year) => {
  const listBooks = books.filter((book) => {
    return (year - book.releaseYear) >= 60
  });
  return listBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}
const now = new Date;
const year = now.getFullYear();
// console.log(oldBooksOrdered(books, year));



// Crie um array em ordem alfabética apenas com
// os nomes de todas as pessoas autoras de ficção
// científica ou fantasia.
const fantasyOrScienceFictionAuthors = (books) => {
  const list = books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  });
  return list.map((item) => item.author.name).sort();
}
// console.log(fantasyOrScienceFictionAuthors(books));


// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const oldBooks = (books, year) => {
  const listBooks = books.filter((book) => {
    return year - book.releaseYear >= 60;
  });
  return listBooks.map((book) => book.name);
}
// console.log(oldBooks(books, year));


// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorWith3DotsOnName = (books) => {
  const requisito = books.filter((book) => {
    const autor = book.author.name;
    return autor[7] === '.'
  });
  return requisito[0].name;
}
// console.log(authorWith3DotsOnName(books))