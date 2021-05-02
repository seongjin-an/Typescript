import {Interface} from "readline";

class Person2{
    constructor(public name:string, public age?: number){}
}
let jack2:Person2 = new Person2('Jack', 32)
console.log(jack2)

class Person3{
    name:string
    age?:number
    constructor(name:string, age?:number) {
        this.name = name
        this.age = age
    }
}
let jack3:Person3 = new Person3('Jack', 32)

interface IPerson4{
    name:string
    age?:number
}

class Person4 implements IPerson4{
    constructor(public name:string, public age?:number){}
}

abstract class AbstractPerson5{
    abstract name: string
    protected constructor(public age?: number){}
}
class Person5 extends AbstractPerson5{
    constructor(public name: string, public age?: number){
        super(age)
    }
}
let jack5:Person5 = new Person5("Jack", 32)
console.log(jack5)
