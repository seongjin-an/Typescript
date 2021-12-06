interface User {
    name: string;
}
interface Product{
    id: string;
    price: number;
}

class Cart{
    private store: {[key:string]: Product};
    
    constructor(protected user:User){
        this.store = {};
    }

    public put(id:string, product:Product){ 
        // (this.store as any)[id] = product;
        this.store[id] = product;
    }
    public get(id: string){
        return this.store[id];
    }
}

class PromotionCart extends Cart{
    addPromotion(){
        this.user
    }
}

const johnCart = new Cart({name: 'john'} as User)
const jayCart = new Cart({name: 'jay'})
const cart2 = new PromotionCart({name: 'cart2'})
