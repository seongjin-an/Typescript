interface DB<T>{
    add(v:T):void;
    get():T;
}
interface JSONSerializer{
    serialize(): string;
}
interface User{ name: string }
class LocalDB<T extends JSONSerializer> implements DB<T>{
    constructor(private localStorageKey: string){}
    add(v: T){
        v.serialize();
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get(): T{
        const v = localStorage.getItem(this.localStorageKey)
        return (v) ? JSON.parse(v) : null;
    }
}
class TempoClass<T> implements DB<T>{
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }

}

// const userDb = new LocalDB<User>('user')
// userDb.add({name: 'jay'})
// const userA = userDb.get();
// userA.name;



//conditional
interface Vegetable{
    v:string;
}
interface Meat{
    m:string;
}
interface Vehicle<T>{
    getItem(): T extends Vegetable ? Vegetable : Meat;
}

const vehicle1: Vehicle<string> = {
    getItem(){
        return {m: ''}
    }
}

vehicle1.getItem()