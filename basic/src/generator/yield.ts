function* generator(){
    console.log("generator started...")
    let value=1
    while(value < 4){
        yield value++
    }
    console.log("generator finished...")
}
for(let value of generator())
    console.log(value)
//yield는 반드시 function* 키워드를 사용한 함수에서만 호출할 수 있다.

console.log("//////////////////////")
const period = 1000
let count = 0
console.log("program started...")
const id = setInterval(()=>{
    if(count >=3 ){
        clearInterval(id)
        console.log("program finished...")
    }
    else{
        console.log(++count)
    }
}, period)

console.log("///////////////////////////////////////////////////")
