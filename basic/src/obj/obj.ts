let o: object = {name: 'Jack', age: 32}
console.log(o)
o = {first:1, second: 2}
console.log(o)

interface IPerson{
    name: string,
    age: number
}
let good: IPerson = {name: 'Jack', age: 32}
// let bad1: IPerson = {name: 'Jack'}
// let bad2: IPerson = {age:32}
// let bad3: IPerson = {}
// let bad4: IPerson = {name: 'Jack', age: 32, etc: true}

interface IPerson2{
    name:string,
    age:number,
    etc?:boolean
}
let good1:IPerson2 = {name:'Jack', age: 32}
let good2:IPerson2 = {name:'Jack', age:32, etc:true}
let good3:{name:string, age:number, etc?:boolean} = {name:'Jack', age:32}
