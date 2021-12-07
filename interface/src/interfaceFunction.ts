interface HelloPerson {
    (name: string, age?: number): void
}

const helloPerson: HelloPerson = function(name: string, age?: number): void {
    console.log(`hello ${name}`);
}

helloPerson('ansj')