const numArray:number[] = [1,2,3]
for(let value of numArray)
    console.log(value)

const strArray: string[] = ['hello', 'world', '!']
for(let value of strArray)
    console.log(value)
console.log("///////////////////////////////////////////////////")
const createRangeIterable = (from: number, to: number) => {
    let currentValue = from
    return {
        next() {
            const value = currentValue < to ? currentValue++ : undefined
            const done = value === undefined
            return {value, done}
        }
    }
}
const iterator = createRangeIterable(1, 3 + 1)
while(true){
    const {value, done} = iterator.next()
    if(done) break
    console.log(value, done)
}
/*
반복기는 왜 필요한가
앞 코드가 1~3 정수를 출력함 즉, iterator.next메서드가 반복 호출될 때마다 각기 다른 값이 출려된다.
반복기 제공자가 생성한 값 1,2,3을 배열에 담아서 출력하지 안핬고, 마치 for문을 돌면서 값을 콘솔 출력문으로
찍어낸 듯한 모습임. 반복기 제공자는 이처럼 어떤 범위의 값을 한꺼번에 생성해서 배열에 담지 않고 값이 필요할 때만
생성한다.
 */

class RangeIterable {
    constructor(public from:number, public to:number){}
    [Symbol.iterator](){
        const that = this
        let currentValue = that.from
        return{
            next(){
                const value = currentValue < that.to ? currentValue++ : undefined
                const done = value === undefined
                return {value, done}
            }
        }
    }
}

class StringIterable implements Iterable<string>{
    constructor(private strings: string[] = [], private currentIndex:number = 0){}
    [Symbol.iterator]():Iterator<string>{
        const that = this
        let currentIndex = that.currentIndex, length = that.strings.length

        const iterator: Iterator<string> = {
            next(): {value: any, done: boolean}{
                const value = currentIndex < length ? that.strings[currentIndex++]:undefined
                const done = value === undefined
                return {value, done}
            }
        }
        return iterator
    }
}
for(let value of new StringIterable(['hello', 'world', '!']))
    console.log(value)