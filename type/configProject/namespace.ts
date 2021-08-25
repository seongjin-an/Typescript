/*
npm init -y
tsc --init
 */
namespace Validation{
    export interface StringValidator{
        isAcceptable(s: string): boolean
    }
    const lettersRegexp = /^[A-Za-z]+$/
    const numberRegexp = /^[0-9]+$/

    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s)
        }
    }

    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s: string){
            return s.length === 5 && numberRegexp.test(s)
        }
    }
}

let strings = ["Hello", "98052", "101"]

let validators:{[s:string]:Validation.StringValidator} = {"hi": new Validation.LettersOnlyValidator()};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for(let s of strings){
    for(let name in validators){
        console.log(`${ s } - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`)
    }
}
interface IApi {
    [api: string]: {
        name: string,
        age: number
    }
}
const Api: IApi = {}
const data = {api: {name: 'ansj', age: 21}}
Object.assign(Api, data)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
console.log(`abc ${Api.api.name}${Api.api.age}`)

const imsi = {hello: {name: 'world', age: 99}}
Object.assign(Api, imsi)
console.log(`hello world ${Api.hello.name}${Api.hello.age}`)
console.log(`abc ${Api.api.name}${Api.api.age}`)