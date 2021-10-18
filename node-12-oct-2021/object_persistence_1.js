const fs = require("fs")

const books = [
  { name: "title1", description: "is more afd ghf", pages:250 },
  { name: "title2", description: "is more dsf ght", pages:350 },
  { name: "title3", description: "is more gsd ghy", pages:450 }
];

const booksJson = JSON.stringify(books)

fs.writeFileSync("booksJson.json",booksJson )