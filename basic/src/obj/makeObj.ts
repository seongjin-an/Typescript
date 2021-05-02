/**
 * 객체의 속성 이름을 변수로 만들려고 할 떄 사용(색인 가능 타입, indexable type)
 * {name: 'Jack'}, {firstName: 'Jane'}
 */
const makeObject = (key:string, value:string) => ({[key]:value})
console.log(makeObject('name', 'Jack'))
console.log(makeObject('firstName', 'Jane'))

type keyValueType = {
    [a: string]: string
}
const makeObject2 = (key:string, value: string): keyValueType => ({[key]: value})
console.log(makeObject2('name', 'Jack'))
console.log(makeObject2('firstName', 'Jane'))