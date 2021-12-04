function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{}; // 교차 타입
    console.log('first:', first);
    console.log("second:", second);
    for (let id in first) {
        console.log("in first, id:", id);
        (<any>result)[id] = (<any>first)[id];
    }
    // for (let id in second) {
    //     if (!result) {
    //         (<any>result)[id] = (<any>second)[id];
    //     }
    // }
    for (let id in second) {
        console.log('in second, id:', id);
        (<any>result)[id] = (<any>second)[id];
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log(): void {
        console.log('consoleLogger log')
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
console.log('jim:', jim, ' / n:', n)
jim.log();