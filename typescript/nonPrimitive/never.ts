function error(message: string): never{
    throw new Error(message);
}

function fail(){
    return error('failed...');
}

function infiniteLoop(): never{
    while(true){}
}

//
let a: string = 'hello'

if(typeof a !== 'string'){
    a;//never
}

declare const b: string|number;
if(typeof b !== 'string'){
    b;
}

//conditional type
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;
// const indexable: Indexable<{}> = '';// error

type ObjectIndexable = Indexable<{}>;
