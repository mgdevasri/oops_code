class Mobile {
    brand: string;
    model: string;
    price: number;

    // Parameterized Constructor
    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    display(): void {
        console.log("Brand :", this.brand);
        console.log("Model :", this.model);
        console.log("Price :", this.price);
    }
}

// Object creation
const phone1 = new Mobile("OnePlus", "Nord CE", 30000);

phone1.display();
