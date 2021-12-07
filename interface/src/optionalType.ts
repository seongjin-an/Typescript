interface Person2 {
    name: string;
    age?: number;
}

function hello2(person: Person2): void {
    console.log(`hello ${person.name}`)
}

const p2: Person2 = {
    name: 'ansj',
    // age: 111
}

hello2(p2);