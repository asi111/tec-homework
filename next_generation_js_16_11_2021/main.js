class Student {
    constructor(name,age,male,female,other){
        this.name=name,
        this.age = age,
        this.gander = [male,female,other]
        
    }
    write (){
        console.log(this.name, this.age ,this.gander[0])
       
    }

    isYoung (){ 
       if(this.age < 18){
        return true
       }  
       return false
       

    }
}

const studentOne = new Student("ban",17,"male")
const studentTwo = new Student("dana",45,"female")
const studentThree = new Student("dana",12,"female")

const array = [studentOne,studentTwo,studentThree]

array.forEach(item=> {
    
     console.log( item.isYoung() );
    
});

// studentOne.write()

// studentOne.isYoung()
// studentTwo.isYoung()