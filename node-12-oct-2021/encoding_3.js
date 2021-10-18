const fs = require("fs");




    const data = fs.readFile("a3.txt",(err,data)=>{
        try {
            console.log(data);
        } 
        catch (error) {
            console.log(err);
            
        }
        
    })

  
fs.writeFile("a3.txt", "שלום עולם", err =>{
    if(err){
       console.log(err);
    }
});




//  ! האם התקבלה מחרוזת? 
//  כן
//  ! כיצד ניתן לפענח את שהתקבל?
//   UTF-8 encoding table 
//   ניתן להמיר לאותיות ולפענח את שהתקבל

//   ! מה ניתן לעשות כדי לקבל מחרוזת תקינה?
//   להשתמש בUTF-8 encoding  
//   כפרמטר
