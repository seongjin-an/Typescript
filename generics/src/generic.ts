function helloString(message: string): string{
    return message;
}

function helloNumber(message: number): number{
    return message;
}

//
function hello<T>(message:T): T{
    return message;
}
console.log(hello('ansj'));
console.log(hello(111));