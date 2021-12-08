class ClassName{
    private static instance: ClassName | null = null;
    private constructor() {}
    public static getInstance(): ClassName{
        if(this.instance === null){
            this.instance = new ClassName();
        }
        return this.instance;
    }
}

const instanceA = ClassName.getInstance();
const instanceB = ClassName.getInstance();

console.log(instanceA === instanceB)