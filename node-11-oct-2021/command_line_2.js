console.log("app is loading...");
const process = require("process")


const arrayNum = [2,11,1,8,18]
let maximum = arrayNum[0]
let minimum = arrayNum[0]
 let sumNum = 0
  let average = 0

let string = process.argv[2]

function maxNum(max){
    for(let i = 0 ; i < arrayNum.length; i++){
    if ( max < arrayNum[i] ){
        max = arrayNum[i]
    }
}
return max

}


function minNum(min){
    for(let i = 0 ; i < arrayNum.length; i++){
    if ( min > arrayNum[i] ){
        min = arrayNum[i]
    }
}
return min

}


function sumOfArrNum(sum){
    for(let i = 0 ; i < arrayNum.length; i++){
        sum  += arrayNum[i]
    }
    return sum
    
}

function AvgOfArrNum( sum,avg ){
    for(let i = 0 ; i < arrayNum.length; i++){
        sum += arrayNum[i]
        avg = sum/arrayNum.length
    }
    return `${avg}`
}





switch(string){
    case "max" : console.log(maxNum(maximum ));
    break;

    case "min" : console.log( minNum(minimum));
    break;

    case "sum" : console.log( sumOfArrNum(sumNum));
    break;

    case "avg" : console.log(AvgOfArrNum(average ));
    break;

    default: console.log("err"); 
}