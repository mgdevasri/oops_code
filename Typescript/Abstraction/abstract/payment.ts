// Abstract class
abstract class Payment {

    // Abstract methods
    abstract pay(amount: number): void;

    // Normal method
    receipt(amount: number): void {
        console.log(`Payment of ₹${amount} completed`);
    }
}

// Derived class: Credit Card
class CreditCardPayment extends Payment {
    pay(amount: number): void {
        console.log("Paying with Credit Card");
        this.receipt(amount);
    }
}

// Derived class: UPI
class UpiPayment extends Payment {
    pay(amount: number): void {
        console.log("Paying with UPI");
        this.receipt(amount);
    }
}

// Main usage
const payment1: Payment = new CreditCardPayment();
payment1.pay(1000);

const payment2: Payment = new UpiPayment();
payment2.pay(500);
