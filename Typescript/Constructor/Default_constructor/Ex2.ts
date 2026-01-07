class Mobile {
    brand: string;
    price: number;

    constructor() {   // default constructor
        this.brand = "Samsung";
        this.price = 70000;
    }
}

let m = new Mobile();
console.log(m.brand);
console.log(m.price);
