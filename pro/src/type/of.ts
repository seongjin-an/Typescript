interface Person{
    name: string;
    age: number;
}

interface Imsi{
    test<T extends keyof Person>(arg0: T):void
}

class Test implements Imsi{

    test<T extends keyof Person>(arg0: T) {
        console.log('test:', arg0)
    }
}

const test = new Test();
test.test('age')
test.test('name')


type ValueOf<T> = T[keyof T];

type Foo = { a: string, b: number };
type ValueOfFoo = ValueOf<Foo>; // string | number

type sameAsString = Foo['a']; // look up a in Foo
type sameAsNumber = Foo['b']; // look up b in Foo

type JWT = { id: string, token: string, expire: Date };
const obj: JWT = { id: 'abc123', token: 'tk01', expire: new Date(2018, 2, 14) };

function print(key: keyof JWT) {
    switch (key) {
        case 'id':
        case 'token':
            console.log(obj[key].toUpperCase());
            break;
        case 'expire':
            console.log(obj[key].toISOString());
            break;
    }
}
function onChange<K extends keyof JWT>(key: K, value: JWT[K]){
    switch (key) {
        case 'id':
        case 'token':
            // obj[key] = value + ' (assigned)';
            break;
        case 'expire':
            obj[key] = value;
            break;
    }
}


onChange('id', 'def456'); // okay
onChange('expire', new Date(2018, 3, 14)); // okay
// onChange('expire', 1337); // error. 1337 not assignable to Date

interface IMemo<T extends string = string>{
    memo: T
}

const memo: IMemo = {
    memo: 'false'
}


interface stuff {
    props: {}
}

interface random<T extends stuff> {
    test: T['props'] & (T['props'] extends {classes: IBook}? {classes: IBook} : {classes: IShoes})
}


const record: Record<string, number> = {
    name: 1
}
interface IBook{
    book: string
}
interface IShoes{
    shoes: string
}
class stuffImpl implements stuff{
    props: {
        classes: {
            // book: 'ansj'
            shoes: 'ansj'
        }
    };

}
const ran: random<stuffImpl> = {
    test: {
        classes:{
            // book: 'ansj'
            shoes: 'ansj'
        }
    }
}

type PartialPerson = Partial<IPerson>;
const person11:PartialPerson = {};
type PickPerson = Pick<IPerson, "age">
const person22:PickPerson = {age: 2}
