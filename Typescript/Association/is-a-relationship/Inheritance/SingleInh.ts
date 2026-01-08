class BankAccount1 {
    protected balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount1 extends BankAccount1 {
    addInterest() {
        this.balance += 500;
    }
}

const ac = new SavingsAccount1(5000);
ac.addInterest();
console.log(ac.getBalance());
