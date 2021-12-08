class Student{
    a: 'male' = 'male';
    [index: string]: 'male' | 'female';
    mark: 'male' = 'male';

}

const a = new Student();
a.mark = 'male'

console.log('a:', a)