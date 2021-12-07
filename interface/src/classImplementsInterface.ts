interface IPerson2 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson2{
    name: string;
    age?: number | undefined;
    constructor(name: string) {
        this.name = name;
    }
    hello(): void {
        console.log(`hello ${this.name}`)
    }
    
}

const person = new Person('ansj');
person.hello()