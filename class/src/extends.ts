class Parent{
    constructor(protected _name: string, private _age:number){}

    public print(): void{
        console.log(`name: ${this._name}, age: ${this._age}`)
    }
    protected printName(){
        console.log('printName:', this._name);
    }
}

const p = new Parent('ansj', 333)
p.print();

class Child extends Parent {
    public gender = 'male';
    // protected _name = 'mark3';
    constructor(age: number){
        super("ansj2", age);
        this.printName();
    }

}

// const c = new Child("son ansj", 1);
const c = new Child(3);
c.print();