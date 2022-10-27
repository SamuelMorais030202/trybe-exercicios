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
  function authorBornIn1947(books) {
    const author = books.find((book) => {
      return book.author.birthYear === 1947;
    });

    return author.author.name;
  }

  // console.log(authorBornIn1947(books));


  // Retorne o nome do livro de menor nome.
  function smallerName(books) {
    let nameBook = books[0].name;
    books.forEach((book) => {
      if (book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    return nameBook;
  }

  // console.log(smallerName(books));


  // Encontre o primeiro livro cujo nome possui 26 caracteres
  const sizeName = (books) => {
    return books.find((book) => book.name.length === 26);
  }

  // console.log(sizeName(books));


  // Ordem decrescente dos livros por data de lançamento
  const booksOrderedByReleaseYearDesc = (books) => {
    const newBooks = [];
    books.forEach((book) => newBooks.push(book.releaseYear));
    newBooks.sort((a, b) => b - a);
    let bookList = [];
    books.forEach((element, index) => {
      if (element.releaseYear === newBooks[index]) {
        bookList.push(element);
      }
    });
    return bookList;
  }

  console.log(booksOrderedByReleaseYearDesc(books));


  // Faça uma função que retorne true, se todas as pessoas autoras
  // nasceram no século XX, ou false, caso contrário.
  const everyoneWasBornOnSecXX = (books) => {
    return books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);
  }
  // console.log(everyoneWasBornOnSecXX(books));


  // Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
  const someBookWasReleaseOnThe80s = (books) => {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
  }
  // console.log(someBookWasReleaseOnThe80s(books));

  
  // Faça uma função que retorne true, caso nenhum author 
  // tenha nascido no mesmo ano, e false, caso contrário.
  const authorUnique = (books) => {
    const authorsAges = [];
    books.forEach((book) => authorsAges.push(book.author.birthYear));
    for (let index in authorsAges) {
      for (let index2 in authorsAges) {
        if (authorsAges[index] === authorsAges[index2]) return false
      }
    }
    return true
  }
  // console.log(authorUnique(books));