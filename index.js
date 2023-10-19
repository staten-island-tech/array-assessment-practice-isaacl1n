console.log("connected");
console.log(" ")

const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach(book => {
  console.log(book.authorFirst + " " + book.authorLast + " wrote " + book.name + " in " + book.publishDate);
});
  
//Sort books from oldest to most recent
books.sort((a, b) => a.publishDate - b.publishDate);
for (const book of books) {
  console.log(book.name + " by " + book.authorFirst + " " + book.authorLast + " (" + book.publishDate + ")");
}

//sort books alphabetically
titles.sort();
  console.log(titles);

//Find who wrote War and Peace
const warAndPeace = books.find(book => book.name === "War and Peace");
if (warAndPeace) {
  console.log("The author of War and Peace is " + warAndPeace.authorFirst + " " + warAndPeace.authorLast);
} else {
  console.log("War and Peace not found in the list of books.");
}

//how many books were written before 1900?
const before1900 = books.reduce((count, book) => {
  if (book.publishDate < 1900) {
    return count + 1;
  }
  return count;
}, 0);
console.log("There are " + before1900 + " books written before 1900.");

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const notCenturyOld = books.some(book => currentYear - book.publishDate <= 100);
if (notCenturyOld) {
  console.log("At least one book on the list was published within the last century.");
} else {
  console.log("All books on the list are older than 100 years.");
}

//was every book published within the last 100 years?
const allBooksWithinLastCentury = books.every(book => currentYear - book.publishDate <= 100);
if (allBooksWithinLastCentury) {
  console.log("Every book in the list was published within the last century.");
} else {
  console.log("The list contains books that are at least a century old.");
}

//print a list of books that "includes" the genre historical
const historicalBooks = books.filter(book => book.genre.includes("historical"));
if (historicalBooks.length > 0) {
  historicalBooks.forEach(book => {
    console.log(book.name + " by " + book.authorFirst + " " + book.authorLast);
  });
} else {
  console.log("There are no books with the 'historical' genre in this list.");
}