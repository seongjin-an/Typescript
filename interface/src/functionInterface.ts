interface Person4{
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'mark',
    age: 111,
    hello: function(): void {
        console.log(`hello ${this.name}, ${this.age}`)
    }
}

const p42: Person4 = {
    name: 'MARK',
    age: 222,
    hello(): void {
        console.log(`hello ${this.name}, ${this.age}`)
    }
}

// const p43: Person4 = {
//     name: 'MARK3',
//     age: 222,
//     hello: (): void => {
//         console.log(`hello ${this.name}, ${this.age}`)
//     }
// }