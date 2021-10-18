const fs = require("fs");

fs.writeFileSync("a.txt", "node is great");

const data = fs.readFileSync("a.txt");
 console.log(data);

//  ! האם התקבלה מחרוזת? 
//  כן
//  ! כיצד ניתן לפענח את שהתקבל?
//   UTF-8 encoding table 
//   ניתן להמיר לאותיות ולפענח את שהתקבל

//   ! מה ניתן לעשות כדי לקבל מחרוזת תקינה?
//   להשתמש בUTF-8 encoding  
//   כפרמטר

