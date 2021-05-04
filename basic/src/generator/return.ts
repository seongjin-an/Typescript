function* gen(){
    let count = 5
    let select = 0
    let select1 = 1
    while(count--){
        select1 = yield `you select ${select1}`
    }
}
const random = (max:number, min:number = 0) => Math.round(Math.random() * (max-min))+min
const iter = gen()
while(true){
    const i = random(10, 1)
    console.log(i)
    const {value, done} = iter.next(i)
    if(done) break
    console.log(value)
}