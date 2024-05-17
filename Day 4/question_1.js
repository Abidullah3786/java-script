// my code
const book = {
  title: "To kill a moockingbird",
  author: "Harper Lee",
  year: 1960,
  genres: ["Fiction", "Classic", "Literature"]
}

function getBookInfo(book){
  var sentence = book.title + ", published in " + book.year + ".\n" + "Genres: ";
  for(var i=0; i<book.genres.length; i++){
    sentence += book.genres[i] + ", ";
  }
  console.log(sentence);
}
getBookInfo(book);


// chat gpt code 
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
//   genres: ["Fiction", "Classic", "Literature"]
// };

// function getBookInfo(book) {
//   let sentence = `${book.title} by ${book.author}, published in ${book.year}. Genres: `;
//   sentence += book.genres.join(", ");
//   return sentence;
// }

// console.log(getBookInfo(book));

