const fs = require("fs");
const process = require("process");
let library;

let command = process.argv[2];
let bookName = process.argv[3];
let bookAuthor = process.argv[4];
let bookPages = Number(process.argv[5]);

try {
  const libraryData = fs.readFileSync("library.json", "utf8");
  library = JSON.parse(libraryData);
} catch (error) {
  library = [];
}

let books = { name: bookName, author: bookAuthor, pages: bookPages };

switch (command) {
  case "add":
    try {
      if (library === []) {
        library.push(books);
        throw "new arrayObj";
      } else if (library.find((item) => item.name === bookName)) {
        throw "same book name";
      } else {
        library.push(books);
      }
    } catch (error) {
      console.log(error);
    }
    break;

  case "update":
    try {
      if (library === []) {
        throw "empty arrayObj";
      }
       else if (library.find((item) => item.name === bookName)) {
         index = library.findIndex((item) => item.name == bookName);
        library[index].pages = bookPages;
      }
    } catch (error) {
      console.log(error);
    }
    break;

    case "delete" : 
    try {
      if (library === []) {
        throw "empty arrayObj";
      }
       else if (library.find((item) => item.name === bookName)) {
         index = library.findIndex((item) => item.name == bookName);
        library.splice([index],1)
      }
    } catch (error) {
      console.log(error);
    }
    break;

    case "getAll" :
      console.log( library);
      break;

      case "search" :
       let found = library.find((item) => item.name === bookName );
              if(found == undefined){
                console.log("not exist");
              }
              else{
            index = library.findIndex((item) => item.name == bookName);
                console.log(library[index]);
              }

        break;
  
  default:
    console.error(`enter command`);
}

const fileJson = JSON.stringify(library);
fs.writeFileSync("library.json", fileJson);



