function add(a:number, b:number):number{
    return a+b
}
const add2 = (a:number, b:number):number => {
    return a+b
}

function printMe(name:string, age: number):void{
    console.log(`name: ${name}, age: ${age}`)
}
let printMe2: (name: string, age: number) => void = (name:string, age:number):void =>{

}

const init = (callback:()=>void):void => {
    console.log('default initialization finished.')
    callback()
    console.log('all initialization finished')
}
init(() => console.log('custom initialization finished'))

//중첩
const calc = (value:number, cb: (arg0:number) => void):void => {
    let add = (a:number,b:number):number => a+b
    function multiply(a:number, b:number):number{
        return a*b
    }
    let result = multiply(add(1,2), value)
    cb(result)
}
const cb = (result:number):void => {console.log(`result is ${result}`)}
calc(30, cb)

const plus = (x:number):(y:number)=>number => {
    return (y:number):number => {
        return x+y
    }
}
console.log(`plus: ${plus(1)(2)}`)
const plus2 = (x:number):(y:number) => number => (y:number):number => x+y