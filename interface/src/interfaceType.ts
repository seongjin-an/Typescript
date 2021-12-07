interface IPerson1{
    name: string;
    age: number;
}
function hello1(person: IPerson1):void{
    console.log(`hello ${person.name}, ${person.age}`)
}

const p1: IPerson1 = {
    name: "mark",
    age:111
}

hello1(p1);