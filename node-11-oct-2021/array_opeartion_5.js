const process = require("process")



const arrOfNu = [2,4,6,8]

let num = Number(process.argv[2]) 

   arrOfNu.find(item => {
      if(item === Number(num)  ) {
       console.log(num+1); 
      }
else{
    console.log("not found");
}
})

