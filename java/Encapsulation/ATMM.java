class ATM {
    // private data
    private double balance;

    // Constructor
    public ATM(double initialBalance) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
        }
    }

    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    // Withdraw method
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount");
        }
    }

    // Getter
    public double getBalance() {
        return balance;
    }
}

public class ATMM {
    public static void main(String[] args) {
        //object creation + initialize the balance 
        ATM atm = new ATM(5000);

        atm.deposit(2000);
        atm.withdraw(1500);

        System.out.println("Current Balance: " + atm.getBalance());
    }
}
