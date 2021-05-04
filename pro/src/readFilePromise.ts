import {readFile} from "fs";

const readFilePromise = (filename:string): Promise<string> => {
    return new Promise<string>(
        (resolve: (value: string) => void,
         reject: (error:Error) => void) => {
            readFile(filename, (err: Error, buffer: Buffer) => {
                if(err) reject(err)
                else resolve(buffer.toString())
            })
        }
    )
}

readFilePromise('./package.json')
.then((content: string) => {
    console.log(content)
    return readFilePromise('./tsconfig.json')
})
.then((content: string) => {
    console.log(content)
    return readFilePromise('.')
})
.catch((err: Error) => console.log('error:', err.message))
.finally(() => console.log('프로그램 종료'))

Promise.resolve(1)
.then((value:number) => {
    console.log(value)
    return Promise.resolve(true)
})
.then((value: boolean) => {
    console.log(value)
    return [1,2,3]
})
.then((value: number[]) => {
    console.log(value)
    return {name:'jack', age:32}
})
.then((value: {name: string, age: number}) => {
    console.log(value)
})

const isAllTrue = (values: boolean[]) => values.every((value => value === true))
const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolveResult<any>([Promise.resolve(true), Promise.resolve('hello')])
.then(result => console.log('getAllResolveResult',result))
getAllResolveResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
.then(result => console.log(result))
.catch(error => console.log('error:',error.message))

const isAnyTrue = (values: boolean[]) => values.some((value => value === true))
Promise.race([Promise.resolve(true), Promise.resolve('hello')])
Promise.race([Promise.resolve(true), Promise.reject(new Error('error'))])
.then(value => console.log('some value:',value))
.catch(error => console.log('some error:',error.message))
