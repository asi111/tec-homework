
console.log("app is loading...");

const arrayNum = [2,4,6,8,10]
const val = 6

const found = arrayNum.forEach( (item , index )=> {
   if(item === val) {
       console.log(`value : ${item} , index : ${index}`);
   }
   
   else{
    console.log("value not found");
}

})

