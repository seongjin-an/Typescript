interface Person3 {
    name: string;
    age?: number;
    [index: string]: any;//indexable type, optional
}

function hello3(person: Person3): void {
    console.log(`hello ${person.name}`)
}

const p3: Person3 = {
    name: 'mark',
    age: 111
}

const p32: Person3 = {
    name: 'anna',
    systers: ['john', 'james']
}

const p33: Person3 = {
    name: 'jack',
    imsi: p3,
}
