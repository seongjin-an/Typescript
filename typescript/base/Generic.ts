function createPromise<T>(x: T, timeout:number){
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout)
    })
}
createPromise("1", 100).then(v => console.log(v))

function createTuple<T, U>(v: T, v2: U): [T, U]{
    return [v, v2]
}

const t1 = createTuple("user1", 1000)
