// Parent class
class BankAccount {
    
    protected double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }

    public double getBalance() {
        return balance;
    }
}

// Child class 1
class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(double balance, double interestRate) {
        super(balance); // call parent constructor
        this.interestRate = interestRate;
    }

    public void addInterest() {
        balance += balance * interestRate / 100;
    }
}

// Child class 2
class CurrentAccount extends BankAccount {
    private double overdraftLimit;

    public CurrentAccount(double balance, double overdraftLimit) {
        super(balance);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            System.out.println("Withdrawn (with overdraft): " + amount);
        } else {
            System.out.println("Exceeds overdraft limit");
        }
    }
}

// Main class
public class Bank {
    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount(5000, 5);
        sa.deposit(2000);
        sa.addInterest();
        System.out.println("Savings Balance: " + sa.getBalance());

        CurrentAccount ca = new CurrentAccount(1000, 500);
        ca.withdraw(1200);
        System.out.println("Current Balance: " + ca.getBalance());
    }
}
