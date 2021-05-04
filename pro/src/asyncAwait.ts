const test1 = async () => {
    let value = await 1
    console.log('test1:',value)
    value = await Promise.resolve(1)
    console.log('test1:',value)
}
test1()

async function test2(){
    let value = await 'hello'
    console.log('test2:', value)
    value = await Promise.resolve('hello')
    console.log('test2:', value)
}
test2()