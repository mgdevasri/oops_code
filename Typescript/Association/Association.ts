class Address {
    constructor(
        public city: string,
        public pincode: number
    ) {}
}

class User {
    constructor(
        public name: string,
        public address: Address // has-a relationship
    ) {}

    showDetails(): void {
        console.log(
            `${this.name} lives in ${this.address.city}`
        );
    }
}

// Usage
const addr = new Address("Madurai", 625009);
const user = new User("Deva", addr);
user.showDetails();
