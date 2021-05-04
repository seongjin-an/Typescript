function* rangeGenerator(from:number, to:number){
    let value = from;
    while(value < to){
        yield value++
    }
}

let iterator2= rangeGenerator(1, 3+1)
while(1){
    const {value, done} = iterator2.next()
    if(done) break
    console.log(value)
}
console.log()
for(let value of rangeGenerator(4, 6+1))
    console.log(value)