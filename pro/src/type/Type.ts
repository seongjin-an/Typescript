interface IPerson{
    name: string
    age: number
}

const personFun = (name, age):IPerson => {
    return{
        name: name, age: age
    }
}
// type imsi = ReturnType<typeof person>
const person = personFun('ansj', 22)
console.log(typeof person)