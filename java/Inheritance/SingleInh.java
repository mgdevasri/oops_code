class Account {
    protected double balance;

    public Account(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }
}

class SavingsAccount extends Account {
    public SavingsAccount(double balance) {
        super(balance);
    }

    public void addInterest() {
        balance += balance * 0.05;
    }
}

public class SingleInh{
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount(1000);
        acc.deposit(500);
        acc.addInterest();
        System.out.println(acc.balance);
    }
}
