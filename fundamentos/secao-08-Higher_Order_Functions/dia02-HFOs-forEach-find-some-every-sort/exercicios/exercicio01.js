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

  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
  function authorBornIn1947() {
    return books.find((book) => book.author.birthYear === 1947).author.name;
  } 
  // console.log(authorBornIn1947());

  // Retorne o nome do livro de menor nome.
  function smallerName() {
    let nameBook = books[0].name;
    books.forEach((book) => {
      if (book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    })
    return nameBook;
  }
  //console.log(smallerName());

  // encontre o primeiro livro cujo nome possui 26 caracteres
  function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }
  // console.log(getNamedBook());

  //Ordene os livros por data de lançamento em ordem decrescente
  function booksOrderedByReleaseYearDesc(livros) {
    return livros.sort((a, b) => b.releaseYear - a.releaseYear);
  }
  //console.log(booksOrderedByReleaseYearDesc(books));

  //retorne true se todos os autores nasceram no século XX
  //caso contrário retorne false.
  function everyoneWasBornOnSecXX() {
    return books.every((book) => {
      return book.author.birthYear >= 1901 && book.author.birthYear <= 2000
    })
  }
  //console.log(everyoneWasBornOnSecXX())

  //retorne true se algum livro foi lançado na década de 80
  //caso contrário retorne false.
  function someBookWasReleaseOnThe80s() {
    return books.some((book) => book
      .releaseYear >= 1980 && book.releaseYear < 1990)
  }
  //console.log(someBookWasReleaseOnThe80s());

  //Faça uma função que retorne true, caso nenhum author
  //tenha nascido no mesmo ano, e false, caso contrário.
  function authorUnique() {
    return books.every((book) => 
      books.some((someBook) => 
        (book.author.birthYear === someBook.author.birthYear) &&
        (book.author.name !== someBook.author.name)));
  }
  console.log(authorUnique());