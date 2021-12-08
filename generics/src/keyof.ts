interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'ansj',
    age: 111
}
type Keys = keyof IPerson;
const keys1: Keys = "age";
const keys2: Keys = "name";

// IPerson[keyof IPerson] 
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// =>string | number
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson]{
//     return obj[key];
// }
//only one type
function getProp<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}
getProp(person, "name");
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
    obj[key] = value;
}
setProp(person, "age", 222);
console.log('person:', person);

type InKeyof<T> = {
    [K in keyof T]?: T[K]
}
const person1: InKeyof<IPerson> = {
    age: 1,
    // name: "ansj"
}
console.log(typeof keys1)
