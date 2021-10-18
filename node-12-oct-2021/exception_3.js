function savDiv( num1 , num2){
if(num1/num2 !== 0){
    
    return num1/num2
}
 else{
     throw "denominator is zero"
 }

}

console.log( savDiv(Number(0) , Number(2)));