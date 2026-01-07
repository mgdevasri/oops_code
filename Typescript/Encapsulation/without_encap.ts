class BankAccount {
    // Public variable
    balance: number = 0;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
}

const acc = new BankAccount();

acc.deposit(5000);
acc.withdraw(1000);

//  ATM RULES BYPASSED
acc.balance = -9;

console.log("Balance:", acc.balance);
