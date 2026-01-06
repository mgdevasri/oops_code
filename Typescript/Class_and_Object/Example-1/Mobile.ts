class Mobile {
    constructor(
        public brand: string,
        public model: string,
        public price: number,
        public battery: number
    ) {}

    showDetails() {
        console.log(`${this.brand} ${this.model} | Price: ${this.price} | Battery: ${this.battery}%`);
    }

    charge(amount: number) {
        this.battery += amount;
        console.log(`Battery charged to ${this.battery}%`);
    }
}

let m1 = new Mobile("Samsung", "Galaxy S21", 70000, 50);
let m2 = new Mobile("Apple", "iPhone 13", 90000, 30);

m1.showDetails();
m1.charge(20);

m2.showDetails();
m2.charge(40);
