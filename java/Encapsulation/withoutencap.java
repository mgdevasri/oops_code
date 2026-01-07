class BankAccount {

    // ❌ PUBLIC DATA (BIG PROBLEM)
    public double balance;

    // Method exists
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class withoutencap {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();

        // Using ATM methods (GOOD)
        acc.deposit(5000);
        acc.withdraw(1000);

        // ❌ BYPASS ATM RULES
        acc.balance = -99999;   // illegal but allowed

        System.out.println("Balance: " + acc.balance);
    }
}
