let person:object = {name: "Jack", age: 32};
//person.name

//타입변환
console.log((<{name:string, age:number}>person))

interface INameable{
    name: string
}
let obj:object = {name: 'Jack'}
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)