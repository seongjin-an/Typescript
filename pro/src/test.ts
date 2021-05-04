import {readFile, readFileSync} from "fs";

//동기
console.log("read package.json using synchronous api...")
const buffer: Buffer = readFileSync('./package.json')
console.log(buffer.toString())

//비동기
readFile('./package.json', (error: Error, buffer: Buffer) => {
    console.log('read package.json using asynchronous api...')
    console.log(buffer.toString())
})

const readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(filename, (error:Error, buffer:Buffer) => {
            if(error){
                reject(error)
            }else{
                resolve(buffer.toString())
            }
        })
    })
}

(async () => {
    const content = await readFilePromise('./package.json')
    console.log('read package.json using Promise and async/await...')
    console.log(content)
})()