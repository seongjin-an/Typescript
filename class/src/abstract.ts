abstract class AbstractPerson{
    protected _name: string = 'mark';

    abstract setName(name: string):void;
}

class Person2 extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const p2 = new Person2();
p2.setName('ansj');