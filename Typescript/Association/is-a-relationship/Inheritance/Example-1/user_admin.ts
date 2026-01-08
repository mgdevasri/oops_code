// Parent class
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    login(): void {
        console.log(this.name + " logged in");
    }

    logout(): void {
        console.log(this.name + " logged out");
    }
}

// Child class: Admin //login and logout is inherits from the parent class 
class Admin extends User {

    constructor(name: string, email: string) {
        super(name, email);
    }

    manageUsers(): void {
        console.log("Admin managing users");
    }
}

// Child class: Customer
class Customer extends User {

    constructor(name: string, email: string) {
        super(name, email);
    }

    purchase(): void {
        console.log("Customer purchasing product");
    }
}

// Usage
const admin = new Admin("Devasri", "devasri@mail.com");
admin.login();
admin.manageUsers();
admin.logout();

const customer = new Customer("sara", "sara@mail.com");
customer.login();
customer.purchase();
customer.logout();
