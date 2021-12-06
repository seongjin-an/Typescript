interface Person{
    name:string;
    say(message: string): void
}

interface Programmer{
    writeCode(requirement: string): string;
}
abstract class Korean implements Person{
    public abstract jumin: number;
    constructor(public name: string){

    }
    say(msg: string){
        console.log('msg:', msg);
    }
    abstract love(): void;
}

class KoreanProgrammer extends Korean implements Person, Programmer{
    constructor(public name:string, public jumin: number){
        super(name);
    }
    writeCode(requirement: string): string {
        console.log('requirement:', requirement);
        return requirement + '...';
    }
    say(message: string): void {
        console.log('message:',message);
    }

    love(){
        console.log('love...');
    }
    
}

const koreanProgrammer = new KoreanProgrammer('ansj', 1);
koreanProgrammer.love();
