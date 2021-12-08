class Person {
    private name: string = 'ansj';
    private age: number = 1111;
    // constructor(name: string){
    //     this.name = name;
    //     // this.age = age;
    // }
    public readonly prop: string = 'readonly'
    constructor(age?: number){
        if(age === undefined){
            this.age = 222
        }else{
            this.age = age;
        }
    }
    hello(){
        console.log('hello world');
    }
}

const p1 = new Person();
console.log('prop:',p1.prop)

console.log(p1);
