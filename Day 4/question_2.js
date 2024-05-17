// Create an object named library that contains an array of books,
// where each book is an object with properties: title, author, year, and genres. 
// Write a function addBook that adds a new book to the library object. 
// Then, write another function getBooksByGenre that takes a genre as an argument and 
// returns an array of books that belong to that genre.


// my code 

const library = {
  books: [],
}

function addBook(library, title, author, year, genre){
  const book = {
    title: title,
    author: author,
    year: year,
    genre: genre
  }

  library.books.push(book);
}

function getBooksByGenre(genre){
  var commonBooks = [];
  for (let index = 0; index < library.books.length; index++) {
    if(library.books[index].genre == genre){
      commonBooks.push(library.books[index]);
    } 
  }
  return commonBooks;
}

addBook(library, "java script", "john doe", 2019, "programming");



// chatgpt code

// Create an object named library that contains an array of books,
// where each book is an object with properties: title, author, year, and genres. 
// Write a function addBook that adds a new book to the library object. 
// Then, write another function getBooksByGenre that takes a genre as an argument and 
// returns an array of books that belong to that genre.

// const library = {
//   books: [],
// };

// // Function to add a new book to the library
// function addBook(library, title, author, year, genres) {
//   const book = {
//     title: title,
//     author: author,
//     year: year,
//     genres: genres
//   };

//   library.books.push(book);
// }

// // Function to get books by genre
// function getBooksByGenre(genre) {
//   return library.books.filter(book => book.genres.includes(genre));
// }

// // Adding a book to the library
// addBook(library, "JavaScript: The Good Parts", "Douglas Crockford", 2008, ["Programming", "JavaScript"]);
// addBook(library, "Eloquent JavaScript", "Marijn Haverbeke", 2018, ["Programming", "JavaScript"]);
// addBook(library, "You Don't Know JS", "Kyle Simpson", 2015, ["Programming", "JavaScript", "Advanced"]);

// // Getting books by genre
// const programmingBooks = getBooksByGenre("Programming");
// console.log(programmingBooks);

// const javascriptBooks = getBooksByGenre("JavaScript");
// console.log(javascriptBooks);
