
const process = require("process") 

const bookName = process.argv[2]

const arrayOfBooks = []

const book1 = {
    name:"tarzan",
    pages: 200
}

const book2 = {
    name:"spiderMan",
    pages:250
}

const book3= {
    name:"batMan",
    pages: 170
}

arrayOfBooks.push(book1 ,book2, book3)




for (let i = 0; i < arrayOfBooks.length; i++) {
    if ( bookName === arrayOfBooks[i].name ){
       console.log(arrayOfBooks[i].pages +=100); 
    }
    else{
        console.log("book was not found");
    }
}

